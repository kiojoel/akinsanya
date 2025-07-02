// FILE: lib/auth.ts
import { getServerSession, NextAuthOptions, Profile } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.login = (profile as { login: string }).login;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = (token as { login: string }).login;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// This is the new function you are adding to this file.
// It uses the authOptions defined above.
export async function isUserAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user?.name === process.env.ADMIN_GITHUB_USERNAME;
}
