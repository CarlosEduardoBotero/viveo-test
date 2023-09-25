import nextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProviders from "next-auth/providers/credentials";

export const OPTIONS: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProviders({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        //Here we should integrate login API

        //Instead we are using hard-coded user

        const user = {
          id: "42",
          name: "Carlos Botero",
          email: "carlos@gmail.com",
          password: "carlos123",
        };
        const user2 = await new Promise<{
          id: string;
          email: string;
          name: string;
          password: string;
        }>((resolve) => setTimeout(() => resolve(user), 2000));

        if (
          credentials?.email === user2.email &&
          credentials?.password === user2.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin",
  },
};

const handler = nextAuth(OPTIONS);

export { handler as GET, handler as POST };
