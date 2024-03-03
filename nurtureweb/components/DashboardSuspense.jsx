export default function DashboardSuspense() {
  return (
    <>
      <main className="flex flex-col justify-center items-center p-24 h-max min-h-screen w-full gap-5">
        <div className="flex flex-col gap-4 w-52">
          <div className="flex gap-4 items-center">
            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="skeleton h-32 w-full"></div>
        </div>
        <p className="animate-pulse">trying to find an account ⏳</p>
        <a className="underline text-xs" href="/signin">
          are you signed in?
        </a>
      </main>
    </>
  );
}
