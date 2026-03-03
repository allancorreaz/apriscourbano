import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
})

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const parsedCredentials = loginSchema.safeParse(credentials)
        
        if (!parsedCredentials.success) return null
        
        const { email, password } = parsedCredentials.data
        
        const user = await prisma.user.findUnique({
          where: { email: email.toLowerCase() }
        })
        
        if (!user) return null
        
        const passwordMatch = await bcrypt.compare(password, user.password)
        
        if (!passwordMatch) return null
        
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          image: user.image
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
      }
      return session
    },
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isAdmin = auth?.user?.role === "ADMIN"
      const isEditor = auth?.user?.role === "EDITOR" || isAdmin
      
      // Admin routes
      if (nextUrl.pathname.startsWith('/admin')) {
        if (!isLoggedIn) {
          return false // Redirect to login
        }
        if (!isEditor) {
          return false // Access denied
        }
      }
      
      return true
    }
  }
} satisfies NextAuthConfig