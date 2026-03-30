import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { signIn } from "@/utils/db/servicefirebase";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user: any = await signIn(credentials.email);

        if (user) {
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (isPasswordValid) {
            return {
              id: user.id,
              email: user.email,
              fullname: user.fullname,
              role: user.role,
            };
          }
        }
        return null;
      },
    }),
  ],

  // ✅ CALLBACKS FIXED
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account?.provider === "credentials" && user) {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }

      console.log("JWT CALLBACK:", { token, user, account });
      return token;
    },

    async session({ session, token }: any) {
      if (session.user) {
        session.user.email = token.email;
        session.user.fullname = token.fullname;
        session.user.role = token.role;
      }

      console.log("SESSION CALLBACK:", { session, token });
      return session;
    },
  },

  pages: {
    signIn: "/login", // ✅ SESUAIKAN DENGAN FILE KAMU
  },
};

export default NextAuth(authOptions);