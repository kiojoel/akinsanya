// FILE: app/auth-debug/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function AuthDebugPage() {
  const session = await getServerSession(authOptions);
  const sessionUsername = session?.user?.name || "Not Logged In";
  const envAdminUsername = process.env.ADMIN_GITHUB_USERNAME || "Not Set";
  const isMatch = sessionUsername === envAdminUsername;

  return (
    <main
      style={{
        padding: "2rem",
        fontFamily: "monospace",
        color: "white",
        lineHeight: "1.8",
      }}
    >
      <h1>Auth Debug Details</h1>
      <p>This page shows the live values on the Vercel server.</p>

      <div
        style={{
          background: "#222",
          padding: "1rem",
          borderRadius: "8px",
          marginTop: "1rem",
        }}
      >
        <h2>Session Username:</h2>
        <pre style={{ color: "#7fdbff" }}>{`"${sessionUsername}"`}</pre>
      </div>

      <div
        style={{
          background: "#222",
          padding: "1rem",
          borderRadius: "8px",
          marginTop: "1rem",
        }}
      >
        <h2>Vercel Environment Variable (ADMIN_GITHUB_USERNAME):</h2>
        <pre style={{ color: "#ffb347" }}>{`"${envAdminUsername}"`}</pre>
      </div>

      <div
        style={{
          background: "#222",
          padding: "1rem",
          borderRadius: "8px",
          marginTop: "1rem",
        }}
      >
        <h2>Do they match?</h2>
        <pre
          style={{ fontSize: "1.5rem", color: isMatch ? "#39ff14" : "#ff4136" }}
        >
          {isMatch ? "✅ YES" : "❌ NO"}
        </pre>
        <p>
          {isMatch
            ? "The names match. The /admin page should work."
            : "The names DO NOT match. This is why the redirect is happening. Check for typos or extra spaces in the Vercel environment variable setting."}
        </p>
      </div>
    </main>
  );
}
