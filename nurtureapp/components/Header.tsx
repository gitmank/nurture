// TODO - make Header a client component that renders based on route

import Link from "next/link"

const navlinks = [
    {
        name: '🏡 Home',
        href: '#'
    },
    {
        name: '🔑 Enter',
        href: '/signin'
    },
    {
        name: '🧑‍🎓 Profile',
        href: '/profile'
    },
    // {
    //     name: '🏫 Dashboard',
    //     href: '/dashboard'
    // },
]

export default function Header() {

    return (
        <nav className="flex flex-row w-screen h-[100px] items-center justify-around">
            {
                navlinks.map((link, index) => {
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