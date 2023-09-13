// TODO - check if user is allowed to sign in
// TODO - save user to database

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// creating an options object to pass to NextAuth function
export const OPTIONS = {
    
    // added google provider for signing in
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],

    // set maxAge to 30 days
    session: {
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 7 * 24 * 60 * 60,
    },

    // changed default signin, signout and error pages
    pages: {
        signIn: "/signin",
        signOut: "/",
        error: "/error",
        newUser: "/onboarding",
    },

    callbacks: {

        // adding a role property to the session.user object
        async session({ session, token, user }) {
            session.user = {
                ...session.user,
                role: token.role,
            }
            return session;
        },

        // saving the user to db and assigning a role
        async jwt({ token, user, account, profile, isNewUser }) {

            // adding default role to all new users
            if(isNewUser) {
                token.role = "user";
            }
            return token;
        },

        // checking if user is allowed to sign in
        async signIn({ user, account, profile }) {
            const isAllowedToSignIn = true;
            if (isAllowedToSignIn) {
                return true;
            }
            else {
                return false;
            }
        },
    },


}

// handler is the function run on this route
const handler = NextAuth(OPTIONS)

// export handler for both GET and POST requests
export { handler as GET, handler as POST }