import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }
  return (
    <div className="min-h-screen flex-grow-1 w-full py-8 px-72 bg-[var(--bg-color)] text-[var(--text-color)] ">
      <h1 className="text-3xl m-14">Sign in</h1>
      <a href="/login/github">Sign in with GitHub</a>
    </div>
  );
}
