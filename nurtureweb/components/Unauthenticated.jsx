export default function Unauthenticated() {
    return (
        <main className="bg-secondary-default text-primary-default flex flex-col items-center justify-center gap-20 h-screen w-screen p-14 text-center">
          <h1 className="text-2xl">You'll have to sign into your account first 😅</h1>
          <a className="self-center text-lg underline" href="/">Return Home</a>
        </main>
      )
}