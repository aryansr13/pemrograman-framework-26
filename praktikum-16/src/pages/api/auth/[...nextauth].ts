import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { signIn } from "@/utils/db/servicefirebase";
import GoogleProvider from "next-auth/providers/google";
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
          role: user.role,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],

  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      // 🔹 Login Credentials
      if (account?.provider === "credentials" && user) {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }

      // 🔹 Login Google
      if (account?.provider === "google") {
        token.fullname = user?.name || profile?.name;
        token.email = user?.email || profile?.email;
        token.image = user?.image || profile?.picture;
        token.type = "google";
      }
// benerin eror atas ini
      return token;
    },
// ini juga beda
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