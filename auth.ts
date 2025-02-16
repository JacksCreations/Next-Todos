import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import prisma from "@/prisma/client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log(user);
      if (!user.email) return false; // ❌ Reject users without an email

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            email: user.email,
            name: user.name,
            image: user.image,
            githubId: user.id,
          },
        });
      }
      return true; // ✅ Allow sign-in
    },
    async session({ session }) {
      /*
      User session object returned by github auth
        { 
          id: 'fec2f448-ae8e-440a-bdfe-1c2157d605be',
          name: 'Jack L.',
          email: 'lohmarcreations@gmail.com',
          image: 'https://avatars.githubusercontent.com/u/97922723?v=4'
        }
      */
      if (session.user?.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: session.user.email },
        });
        if (dbUser) session.user.id = dbUser.id;
        // ✅ This updates the session’s id to match the database’s user ID.
        // if we didn't change this, and just logged (user) to the console, you'll see that the session id changes each time
        //
      }
      return session;
    },
  },
});
