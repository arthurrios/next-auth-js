import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { db } from './db'
import { compare } from 'bcryptjs'
import { loginSchema } from '@/schemas/loginSchema'

export const { signIn, signOut, auth, handlers } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const { success, data } = loginSchema.safeParse(credentials)

        if (!success) {
          return null
        }

        const { email, password } = data

        const user = await db.user.findUnique({
          where: {
            email,
          },
        })

        if (!user) {
          return null
        }

        const isPasswordValid = await compare(password, user.password)

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
})
