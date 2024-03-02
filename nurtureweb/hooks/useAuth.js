'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import app from "@/firebase/config";
import { getAuth } from "@firebase/auth";

export default function useAuth() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(true);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      try {
        if (user) {
          setUser(user);
          setError(false);
        } else {
          setError(true);
          router.push("/signin");
        }
      } catch (error) {
        console.log('Authentication Error - ', error);
        setError(true);
      }
    });
    return unsubscribe;
  }, []);
  return [user, error];
}
