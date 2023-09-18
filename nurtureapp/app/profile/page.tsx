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
      <section className="h-screen w-screen">
        <Header />
        <nav className="flex w-screen h-max p-3 flex-row justify-around items-center border-b-2 border-black">
          <Image width={100} height={100} src={session.user.image} alt={session.user.name} className="rounded-full w-12 h-12" />
          <h1 className="text-bold text-center text">{session.user.name}</h1>
          <SignOutButton styleClass={`text-red-500 text-center hover:text-white hover:scale-[1.01] duration-100 border-2 border-red-400 hover:border-black bg-white hover:bg-red-500 p-1 px-3 rounded-md hover:rounded-lg`} />
        </nav>
        <main className="flex flex-col h-[400px] w-screen justify-center items-center gap-10 p-14 text-center">
          <h1 className="text-2xl">Welcome 👋</h1>
          <h3 className="text-lg">We are working on your onboarding experience 🚧</h3>
        </main>
      </section>
    )
  }
  return (
    <Unauthenticated />
  )
}