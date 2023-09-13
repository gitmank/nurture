'use client'

import { signIn } from "next-auth/react";

export default function SignInButton({ text }) {
    return (
        <button onClick={() => signIn()} className="relative animate-bounce inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded-full hover:bg-white group">
            <span className="w-80 h-80 rounded rotate-[-40deg] bg-primary-default absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full group-hover:ml-0 group-hover:mb-48 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black text-lg md:text-xl lg:text-2xl transition-colors duration-300 ease-in-out group-hover:text-white">{text}</span>
        </button>
    )
}