import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions, isUserAdmin } from "@/lib/auth";
import WriteForm from "./WriteForm";
import LoginButton from "../components/LoginButton";

export default async function AdminPage() {
  const isAdmin = await isUserAdmin();
  const session = await getServerSession(authOptions);

  if (!isAdmin) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Not Authorized</h1>
        <p className="mt-4 text-gray-400">
          You do not have permission to view this page.
        </p>
        <div>
          <Link
            href="/"
            className="mt-6 inline-block rounded-md bg-sky-500 px-4 py-2 text-white"
          >
            Go to Homepage
          </Link>
          <LoginButton />
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Admin Panel</h1>
      {/* We can safely assume session exists here because isAdmin is true */}
      <p className="text-gray-400 mb-8">Welcome, {session?.user?.name}.</p>
      <WriteForm />
    </main>
  );
}
