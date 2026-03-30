import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";

import {
  signIn,
  signInWithOAuth // Service yang sudah direfactor
} from "@/utils/db/servicefirebase";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    // 1. LOGIN EMAIL & PASSWORD
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user: any = await signIn(credentials.email);
        if (!user) return null;

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) return null;

        return {
          id: user.id,
          email: user.email,
          fullname: user.fullname,
          role: user.role, // Mengambil role dari Firestore
        };
      },
    }),

    // 2. LOGIN GOOGLE
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    // 3. LOGIN GITHUB (Baru)
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],

  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      // Logic untuk Credentials
      if (account?.provider === "credentials" && user) {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
        token.type = "credentials";
      }

      // Logic Reusable untuk OAuth (Google & Github)
      if (account?.provider === "google" || account?.provider === "github") {
        const data = {
          fullname: profile?.name || profile?.login,
          email: profile?.email,
          image: profile?.picture || profile?.avatar_url,
          type: account.provider,
        };

        await signInWithOAuth(data, (result: any) => {
          if (result.status) {
            token.fullname = result.data.fullname;
            token.email = result.data.email;
            token.image = result.data.image;
            token.role = result.data.role;
            token.type = result.data.type;
          }
        });
      }

      // Default role jika tidak ditemukan
      if (!token.role) {
        token.role = "member";
      }

      return token;
    },

    async session({ session, token }: any) {
      session.user = {
        ...session.user,
        email: token.email,
        fullname: token.fullname,
        image: token.image,
        role: token.role,
        type: token.type,
      };
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);