import GoogleSignInButton from "@/components/GoogleSignInButton"

export default function Page() {
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
        <GoogleSignInButton />
        <a className="self-center mt-10 text-lg underline" href="/">Return Home</a>
      </div>
    </main>
  )
}