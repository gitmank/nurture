import Image from 'next/image'
import smiley from '@/public/images/smiley.png'

export default function ErrorPage({ searchParams }) {

    const message = searchParams.message

    return (
        <main className="bg-secondary-default text-primary-default flex flex-col items-center justify-center gap-14 md:gap-20 h-screen w-screen p-14 text-center">
            <Image className="w-28 h-28" src={smiley} alt="smiley" />
            <h1 className="text-xl">Something went wrong, but it's alright ❣️</h1>
            <h2 className="text-md">please try again or&nbsp;
                <a className="underline" href="mailto:nominal.grabs0r@icloud.com">click here to send us an email</a>
            </h2>
            <a className="self-center text-lg underline" href="/">Return Home</a>
            <h6 className='text-[10px]'>{message}</h6>
        </main>
    )
}