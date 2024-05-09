"use client";
import useAuth from "@/hooks/useAuth";
import BottomNav from "@/components/BottomNav";
import DashboardSuspense from "@/components/DashboardSuspense";
import SignOutButton from "@/components/SignOutButton";
import ProfileDetails from "@/components/ProfileDetails";
import { useEffect, useState } from "react";

const levels = {
  "Minimal": "🔵⚪️⚪️⚪️⚪️",
  "Mild": "🔵🔵⚪️⚪️⚪️",
  "Moderate": "🔵🔵🔵⚪️⚪️",
  "High": "🔵🔵🔵🔵⚪️",
  "Severe": "🔵🔵🔵🔵🔵",
}

export default function DashboardPage() {
  const [user, error] = useAuth();
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (!user) return;
    getResult();
  }, [user]);

  const getResult = async () => {
    const token = await user.getIdToken();
    Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/result/depression`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/result/anxiety`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
    ])
      .then((data) => {
        setResult([...result, ...data[0], ...data[1]]);
      })
      .catch((error) => console.error(error));
  };

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
              Recent Reports
            </h1>
            <div className="flex flex-row flex-wrap w-full h-full justify-around items-center">
              {
                result.map((report, index) => (
                  <div key={index} className="flex flex-col w-max h-max items-center justify-center gap-2 text-center md:text-left overflow-scroll no-scrollbar">
                    <h2 className="text-base lg:text-lg font-bold text-left w-full">
                      {levels[report.result]}
                    </h2>
                    <h2 className="text-base lg:text-lg font-bold text-left w-full">
                      risk of {report.type}
                    </h2>
                    <p className="text-base font-light text-left w-full pb-2 border-dashed border-b-2 rounded-none border-secondary-default">
                      {report.result}
                    </p>
                    <p className="text-[10px] font-light text-right w-full">
                      {new Date(report.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))
              }
            </div>
            <div className="flex flex-col md:flex-row w-full md:max-w-[800px] h-max items-center justify-between gap-8 text-center md:text-left overflow-scroll no-scrollbar"></div>
          </section>
          <BottomNav currentPath={"/dashboard"} />
        </main>
      </>
    );
  }

  return <DashboardSuspense />;
}
