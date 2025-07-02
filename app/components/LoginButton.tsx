"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("github", { callbackUrl: "/admin" })}
      className="mt-6 inline-block rounded-md bg-green-500 px-4 py-2 text-white ml-4"
    >
      Login with GitHub
    </button>
  );
}
