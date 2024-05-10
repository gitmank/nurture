"use client";

import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import BottomNav from "@/components/BottomNav";
import DashboardSuspense from "@/components/DashboardSuspense";

const TAGS = ["family", "friends", "school", "food", "others"];
const STATUS = { SUCCESS: "saved ✅", ERROR: "error 😐", DEFAULT: "" };

export default function DashboardPage() {
  const [user, error] = useAuth();
  const [selectedTag, setTag] = useState("others");
  const [status, setStatus] = useState(false);

  const handleSubmit = async () => {
    setStatus(STATUS.LOADING);
    const range = document.getElementById("mood-range");
    const value = range.value;
    if(!value) return;
    if(!user) return;
    const token = await user.getIdToken();
    const tag = selectedTag || 'others';
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ value, tag }),
    }).then((res) => {
      if (res.status === 200) {
        setStatus(STATUS.SUCCESS);
      } else {
        setStatus(STATUS.ERROR);
      }
    });
  };

  if (user) {
    return (
      <>
        <main className="flex flex-col justify-center items-center p-8 md:p-12 h-max min-h-screen w-full gap-8">
          <h1 className="text-2xl font-bold text-center mb-8">
            How are you feeling today?
          </h1>
          <div className="flex flex-row justify-between items-center w-full md:w-1/2 h-max">
            <p className="text-primary-default text-4xl">😔</p>
            <p className="text-primary-default text-4xl">🙁</p>
            <p className="text-primary-default text-4xl">😐</p>
            <p className="text-primary-default text-4xl">😀</p>
            <p className="text-primary-default text-4xl">😊</p>
          </div>
          <input
            id="mood-range"
            type="range"
            className="range-style neumorphic-slider w-8/12 md:w-1/2"
          />
          <p className="text-primary-default text-lg">
            What is making you feel like this?
          </p>
          <div className="flex flex-row w-full h-max flex-wrap justify-center items-center gap-4">
            {TAGS.map((tag, index) => (
              <button
                key={index}
                onClick={() => setTag(tag)}
                className={
                  selectedTag === tag
                    ? `p-2 px-4 bg-primary-default text-white rounded-full`
                    : `p-2 px-4 bg-secondary-default text-primary-default rounded-full`
                }
              >
                {tag}
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="flex px-3 p-2 bg-primary-default text-white rounded-full"
          >
            Submit
          </button>
          <p>{status}</p>
          <BottomNav currentPath={"/dashboard/checkin"} />
        </main>
      </>
    );
  }

  return <DashboardSuspense />;
}
