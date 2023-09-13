import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// creating an options object to pass to NextAuth function
export const OPTIONS : NextAuthOptions = {
    
    // added google provider for signin
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],

    // changed session strategy, forced jwt and set maxAge to 30 days
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 7 * 24 * 60 * 60,
    },

    // changed default signin, signout and error pages
    pages: {
        signIn: "/signin",
        signOut: "/",
        error: "/error",
        newUser: "/dashboard",
    },

    callbacks: {

        // adding a role to the user object for access control
        async session({ session, token, user }) {
            // TODO - add a role to session.user for access control
            return session;
        },

        async jwt({ token, user, account, profile, isNewUser }) {

            // adding default role to all new users
            if(isNewUser) {
                token.role = "user";

                // TODO - save user to database here
            }
            return token;
        },
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