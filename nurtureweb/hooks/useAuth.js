import { useState, useEffect } from "react";
import app from "@/firebase/config";
import { getAuth } from "@firebase/auth";

export default function useAuth() {
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
