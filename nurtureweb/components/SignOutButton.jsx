"use client";

import { useRouter } from "next/navigation";
import { signOut, getAuth } from "@firebase/auth";
import app from "@/firebase/config";

export default function SignOutButton() {
  // initialize router and auth
  const router = useRouter();
  const auth = getAuth(app);

  // signout and redirect to home page
  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <button
      onClick={handleSignOut}
      className="btn bg-error text-white w-max p-1 px-2"
    >
      Sign Out
    </button>
  );
}
