export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-4">
      <h1 className="text-2xl font-bold animate-pulse">Loading ⏳</h1>
      <a className="text-base underline" href="/">
        Return Home
      </a>
    </div>
  );
}
