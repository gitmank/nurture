"use client";
import useAuth from "@/hooks/useAuth";
import BottomNav from "@/components/BottomNav";
import DashboardSuspense from "@/components/DashboardSuspense";

export default function DashboardPage() {
  const [user, error] = useAuth();

  if (user) {
    return (
      <>
        <main className="flex flex-col justify-center items-center p-24 h-max min-h-screen w-full">
          <BottomNav currentPath={"/dashboard/history"} />
        </main>
      </>
    );
  }

  return <DashboardSuspense />;
}
