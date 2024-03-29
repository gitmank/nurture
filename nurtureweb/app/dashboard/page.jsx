"use client";
import useAuth from "@/hooks/useAuth";
import BottomNav from "@/components/BottomNav";
import DashboardSuspense from "@/components/DashboardSuspense";
import SignOutButton from "@/components/SignOutButton";
import ProfileDetails from "@/components/ProfileDetails";

export default function DashboardPage() {
  const [user, error] = useAuth();

  if (user) {
    return (
      <>
        <main className="flex flex-col justify-start items-center p-8 h-max min-h-screen w-full gap-8">
          <section className="flex flex-col md:flex-row w-full md:max-w-[800px] h-max items-center justify-between gap-8 text-center md:text-left">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 md:items-start">
              <h1 className="text-base font-bold">{user.displayName}</h1>
              <h3 className="text-xs font-light">{user.email}</h3>
            </div>
            <SignOutButton />
          </section>
          <ProfileDetails />
          <section className="flex flex-col border-2 border-primary-default rounded-lg p-4 w-full md:max-w-[800px] h-max items-center justify-between gap-8 text-center md:text-left overflow-scroll no-scrollbar">
            <h1 className="text-xl font-bold text-left w-full">
              Quick Assessments
            </h1>
            <div className="flex flex-row w-full md:max-w-[800px] h-max items-center justify-start gap-4 text-center md:text-left overflow-scroll no-scrollbar">
              <a
                href="/dashboard/assessment/depression"
                className="btn btn-secondary text-lg"
              >
                Depression
              </a>
              <a
                href="/dashboard/assessment/anxiety"
                className="btn btn-secondary text-lg"
              >
                Anxiety
              </a>
            </div>
          </section>
          <section className="flex flex-col border-2 border-primary-default rounded-lg p-4 w-full md:max-w-[800px] h-max items-center justify-between gap-8 text-center md:text-left overflow-scroll no-scrollbar mb-16">
            <h1 className="text-xl font-bold text-left w-full">
              Well-being Report
            </h1>
            <div className="flex flex-col md:flex-row w-full md:max-w-[800px] h-max items-center justify-between gap-8 text-center md:text-left overflow-scroll no-scrollbar"></div>
          </section>
          <BottomNav currentPath={"/dashboard"} />
        </main>
      </>
    );
  }

  return <DashboardSuspense />;
}
