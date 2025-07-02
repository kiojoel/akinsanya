import NextAuth, { NextAuthOptions, Profile } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";

const authOptions: NextAuthOptions = {
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

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
