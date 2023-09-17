// TODO - design and develop profile page
'use client'

import Header from "@/components/Header"
import SignOutButton from "@/components/SignOutButton"
import Unauthenticated from "@/components/Unauthenticated"
import { useSession } from "next-auth/react"
import Image from "next/image"

export default function Page() {
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    return (
      <>
        <Header />
        <Image width={100} height={100} src={session.user.image} alt={session.user.name} className="rounded-full w-20 h-20" />
        Signed in as {session.user.email} <br />
        <SignOutButton styleClass={`text-red-500 hover:text-white hover:scale-[1.01] duration-100 border-2 border-red-400 hover:border-black bg-white hover:bg-red-500 p-1 px-3 rounded-md hover:rounded-lg`} />
      </>
    )
  }
  return (
    <Unauthenticated />
  )
}