'use client'

import { signOut } from "next-auth/react"

export default function SignOutButton({ styleClass }) {
  return (
    <button className={styleClass} onClick={() => signOut()}>Sign out</button>
  )
}