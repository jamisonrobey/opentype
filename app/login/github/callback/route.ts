import { github, lucia } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";
import { userTable } from "@/lib/schema";
import { generateId } from "lucia";

import { eq } from "drizzle-orm";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("github_oauth_state")?.value ?? null;
  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await github.validateAuthorizationCode(code);
    const githubUserResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });
    const githubUser: GitHubUser = await githubUserResponse.json();
    const existingUser = await db
      .select()
      .from(userTable)
      .where(eq(userTable.githubId, Number(githubUser.id)))
      .limit(1);

    if (existingUser.length > 0) {
      const session = await lucia.createSession(existingUser[0].id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/",
        },
      });
    }

    const userId = generateId(15);
    const newUser = await db.insert(userTable).values({
      id: userId.toString(),
      githubId: Number(githubUser.id),
      username: githubUser.login,
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  } catch (e) {
    if (
      e instanceof OAuth2RequestError &&
      e.message === "bad_verification_code"
    ) {
      return new Response(null, {
        status: 400,
      });
    }

    console.log(e);
    return new Response(null, {
      status: 500,
    });
  }
}

interface GitHubUser {
  id: string;
  login: string;
}
