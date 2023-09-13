'use client'

import { SessionProvider } from "next-auth/react";

export default function SessionProviderClientComponent({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}