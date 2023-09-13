'use client'

import SignOutButton from "@/components/SignOutButton"
import Unauthenticated from "@/components/Unauthenticated"
import { useSession } from "next-auth/react"

export default function Page() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <SignOutButton styleClass={`text-red-500 hover:text-white hover:scale-[1.01] duration-100 border-2 border-red-400 hover:border-black bg-white hover:bg-red-500 p-1 px-3 rounded-md hover:rounded-lg`} />
      </>
    )
  }
  return (
    <Unauthenticated />
  )
}