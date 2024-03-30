import ThemeSwitch from "@/components/ThemeSwitcher/ThemeSwitch";
import { lucia, validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="min-h-screen flex-grow-1 w-full py-8 px-72 bg-[var(--bg-color)] text-[var(--text-color)] ">
      <ThemeSwitch />
      <br></br>
      <br></br>
      <>
        <h1>
          Hi,{" "}
          <span className="text-[var(--title-color)]">{user.username}!</span>
        </h1>
        <p>
          Your user ID is{" "}
          <span className="text-[var(--title-color)]">{user.id}.</span>
        </p>
        <br></br>
        <form action={logout}>
          <button>Sign out</button>
        </form>
      </>
    </div>
  );
}

async function logout(): Promise<ActionResult> {
  "use server";
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/login");
}

interface ActionResult {
  error: string | null;
}
