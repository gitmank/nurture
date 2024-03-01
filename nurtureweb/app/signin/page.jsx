"use client";
import { useState, useEffect } from "react";

// firebase google auth imports
import app from "@/firebase/config";
import { getAuth } from "@firebase/auth";
import { signInWithRedirect, GoogleAuthProvider } from "@firebase/auth";
import GoogleSignInButton from "@/components/GoogleSignInButton";

export default function Page() {
  // store authenticated user
  const [user, setUser] = useState(null);

  // listen for auth state changes
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user, error) => {
      if (user) setUser(user);
      else if (error) console.error(error);
    });
    return unsubscribe;
  });

  // handle sign in with google
  const signInHandler = () => {
    try {
      signInWithRedirect(getAuth(app), new GoogleAuthProvider());
    } catch (error) {
      console.error("An error occurred while signing in");
      console.log(error);
    }
  };

  // show user details if signed in
  if (user) {
    return (
      <main className="bg-white h-screen w-screen flex flex-col">
        <div className="flex h-full w-full p-8 md:p-12 lg:p-24 flex-col justify-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto w-32 h-32 rounded-full"
              src={user.photoURL}
              alt="profile picture"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              {user.displayName}
            </h2>
            <h6 className="text-sm md:text-md text-center mt-5">
              You are signed in with Google, but your data is stored seperately
              with us, using a private identifier.
            </h6>
          </div>
          <a
            className="w-max self-center mt-10 flex flex-row h-max bg-fusion-purple text-white bg-primary-default rounded-md p-3 items-center justify-between gap-3"
            href="/dashboard"
          >
            Your Dashboard
          </a>
          <a className="self-center mt-10 text-lg underline" href="/">
            Return Home
          </a>
        </div>
      </main>
    );
  }

  // show sign in page if not signed in
  return (
    <main className="bg-white h-screen w-screen flex flex-col">
      <div className="flex h-full w-full p-8 md:p-12 lg:p-24 flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-32 h-32 rounded-full"
            src="../../../icon.png"
            alt="nurture logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Access Nurture with Google
          </h2>
          <h6 className="text-sm md:text-md text-center mt-5">
            We understand the sensitive nature of health data and never store
            data that we don't explicitly require.
          </h6>
        </div>
        <GoogleSignInButton signInHandler={signInHandler} />
        <a className="self-center mt-10 text-lg underline" href="/">
          Return Home
        </a>
      </div>
    </main>
  );
}
