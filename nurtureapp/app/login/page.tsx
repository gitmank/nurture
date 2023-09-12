export default function Page() {
  return (
    <main className="bg-white h-screen w-screen flex flex-col">
      <div className="flex h-full w-full p-8 md:p-12 lg:p-24 flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-32 h-32 rounded-full"
            src="../icon.png"
            alt="smiley"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Access Nurture with Google
          </h2>
          <h6 className="text-sm text-center mt-5">We understand the sensitive nature of mental health data and never store data that we don't explicitly require.</h6>
        </div>
        <a href="#" className="relative self-center mt-10 flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-primary-default w-max rounded-full hover:bg-white group">
            <span className="w-80 h-80 rounded rotate-[-40deg] bg-secondary-default absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full group-hover:ml-0 group-hover:mb-48 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white text-lg md:text-xl lg:text-2xl transition-colors duration-300 ease-in-out group-hover:text-black">Coming soon ⏳</span>
          </a>
      </div>
    </main>
  )
}