"use client";

import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import BottomNav from "@/components/BottomNav";
import DashboardSuspense from "@/components/DashboardSuspense";

export default function DashboardPage() {
  const [user, error] = useAuth();
  const [value, setValue] = useState(40);

  if (user) {
    return (
      <>
        <main className="flex flex-col justify-center items-center p-24 h-max min-h-screen w-full">
          <input type="range" class="range-style neumorphic-slider" />
          <BottomNav currentPath={"/dashboard/checkin"} />
        </main>
      </>
    );
  }

  return <DashboardSuspense />;
}
