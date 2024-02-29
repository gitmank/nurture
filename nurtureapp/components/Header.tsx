'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

// add or remove navigation links to this array
// setting showifSignedIn to true will only show the link if the user is signed in
const navlinks = [
    {
        name: '🏡 Home',
        href: '/',
        showIfSignedIn: true,
    },
    {
        name: '🔑 Login',
        href: '/signin',
        showIfSignedIn: false,
    },
    {
        name: '👤 Profile',
        href: '/profile',
        showIfSignedIn: true,
    },
    {
        name: '💙 Dashboard',
        href: '/dashboard',
        showIfSignedIn: true,
    },
]

export default function Header() {

    // status can be 'authenticated', 'unauthenticated', or 'loading'

    // usePathname() returns the current path
    const pathname = usePathname()

    return (
        <nav className="flex flex-row w-screen h-[100px] items-center justify-around bg-black text-white">
            {
                navlinks
                .filter(link => link.href !== pathname)
                .filter(link => link.showIfSignedIn === false)
                .map((link, index) => {
                    return (
                        <Link className="hover:border-white border-2 p-3 duration-100 rounded-xl border-black" href={link.href} key={index}>
                            {link.name}
                        </Link>
                    )
                })
            }
        </nav>
    )
}