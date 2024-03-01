'use client'

import Link from "next/link"

// add or remove navigation links to this array
const navlinks = [
    {
        name: '🔑 Login',
        href: '/signin',
    },
    {
        name: '🏡 Dashboard',
        href: '/dashboard',
    },
]

export default function Header() {

    return (
        <nav className="flex flex-row w-screen h-[100px] items-center justify-around bg-black text-white">
            {
                navlinks
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