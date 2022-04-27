import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Username", type: "text", placeholder: "jsmith" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials) {
          const res = await fetch("http://localhost:8080/auth/login", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          const user = await res.json()
          if (res.ok && user) {
            return user
          }
          return null
        }
      })
    ],
    pages: {
      signIn: '/auth/signin',
    },
    session: {
      jwt: true,
    }
});