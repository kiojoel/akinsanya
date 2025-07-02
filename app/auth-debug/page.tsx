// FILE: app/auth-debug/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function AuthDebugPage() {
  const session = await getServerSession(authOptions);

  return (
    <main style={{ padding: "2rem", fontFamily: "monospace", color: "white" }}>
      <h1>Auth Session Details</h1>
      <p>This page shows the session data on the server.</p>
      <pre
        style={{
          background: "#222",
          padding: "1rem",
          borderRadius: "8px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
        }}
      >
        {JSON.stringify(session, null, 2)}
      </pre>
    </main>
  );
}
