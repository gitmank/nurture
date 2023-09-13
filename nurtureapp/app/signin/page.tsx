'use client'

import GoogleSignInButton from "@/components/GoogleSignInButton"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"

export default function Page() {

  const router = useRouter()
  const searchParams = useSearchParams()
  if(!searchParams.get('callbackUrl')) 
    router.replace('/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fprofile')

  return (
    <main className="bg-white h-screen w-screen flex flex-col">
      <div className="flex h-full w-full p-8 md:p-12 lg:p-24 flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-32 h-32 rounded-full"
            src="../../../icon.png"
            alt="nurture logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Access Nurture with Google
          </h2>
          <h6 className="text-sm md:text-md text-center mt-5">We understand the sensitive nature of health data and never store data that we don't explicitly require.</h6>
        </div>
        {/* <a href="#" className="relative self-center mt-10 flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-primary-default w-max rounded-full hover:bg-white group">
            <span className="w-80 h-80 rounded rotate-[-40deg] bg-secondary-default absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full group-hover:ml-0 group-hover:mb-48 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white text-lg md:text-xl lg:text-2xl transition-colors duration-300 ease-in-out group-hover:text-black">Coming soon ⏳</span>
          </a> */}
        {/* <div className="px-6 sm:px-0 w-max self-center mt-10">
          <button type="button" className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
            <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
              <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
            Enter with Google
          </button>
        </div> */}
        <GoogleSignInButton />
        <a className="self-center mt-10 text-lg underline" href="/">Return Home</a>
      </div>
    </main>
  )
}