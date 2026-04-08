import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      fullname?: string;
      role?: string;
      type?: string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
    fullname?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    fullname?: string;
    type?: string;
  }
}