import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt"
  },

  providers: [
    CredentialsProvider({

      name: "Credentials",

      credentials: {

        fullname: { label: "Full Name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }

      },

      async authorize(credentials) {

        if (!credentials) return null

        const user = {

          id: "1",
          email: credentials.email,
          name: credentials.fullname

        }

        return user
      }

    })
  ],

  callbacks: {

    async jwt({ token, user }) {

      if (user) {

        token.email = user.email
        token.name = user.name

      }

      return token
    },

    async session({ session, token }) {

      if (session.user) {

        session.user.email = token.email as string
        session.user.name = token.name as string

      }

      return session
    }

  }

}

export default NextAuth(authOptions)