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
        email: { type: "text" },
        password: { type: "password" },
        terms: { type: "boolean" },
      },
      async authorize(credentials) {
        //Here we should integrate login API

        try {
          const res = await fetch(
            `https://6511ccc6b8c6ce52b3950f44.mockapi.io/api/v1/register?email=${credentials?.email}`
          );
          const data: ApiResponse[] = await res.json();

          const user = data.find(
            ({ password, email }) =>
              password === credentials?.password && email === credentials?.email
          );

          const userCredentials = {
            id: user?.id || "",
            name: user?.name || "",
            email: user?.email || "",
            password: user?.password || "",
            image: user?.image || "",
          };

          if (
            (credentials?.email === user?.email &&
              credentials?.password === user?.password,
            credentials?.email,
            user?.email)
          ) {
            return userCredentials;
          } else {
            throw new Error();
          }
        } catch (err) {
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
