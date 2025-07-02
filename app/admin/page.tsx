import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import WriteForm from "./WriteForm";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  // CORRECTED and more robust security check
  if (
    !session ||
    !session.user ||
    session.user.name !== process.env.ADMIN_GITHUB_USERNAME
  ) {
    redirect("/api/auth/signin/github");
  }

  // After the check above, TypeScript knows `session` and `session.user` exist.
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Admin Panel</h1>
      {/* It is still best practice to use optional chaining in JSX */}
      <p className="text-gray-400 mb-8">Welcome, {session.user?.name}.</p>
      <WriteForm />
    </main>
  );
}
