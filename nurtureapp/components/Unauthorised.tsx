import SignInButton from "./SignInButton";

export default function Unauthenticated() {
    return (
        <main className="bg-secondary-default text-primary-default flex flex-col items-center justify-center gap-20 h-screen w-screen p-14 text-center">
            <h1 className="text-2xl">This page is meant for someone else to see 🙈</h1>
            <h2 className="text-md">if you think we've made a mistake,&nbsp;
                <a className="underline" href="mailto:nominal.grabs0r@icloud.com">click here to send us an email</a>
            </h2>
            <a className="self-center text-lg underline" href="/">Return Home</a>
        </main>
    )
}