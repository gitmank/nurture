"use client";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import DashboardSuspense from "@/components/DashboardSuspense";

export default function DashboardPage() {
  const [user, error] = useAuth();
  const [messages, setMessages] = useState([]); // [ { message: "hi", sender: "user" }, { message: "hello", sender: "bot" }

  const sendMessage = async () => {
    const message = document.getElementById("message").value;
    if (!message) return;
    document.getElementById("message").value = "";
    const response = await fetch("https://nurtureML.manomay.co/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    }).then((res) => res.json());
    setMessages([...messages, { message, sender: "user" }, { message: response, sender: "bot" }]);
  };

  if (user) {
    return (
      <>
        <main className="flex flex-col justify-start items-center p-12 h-max min-h-screen w-full gap-8">
          <h1 className="text-2xl font-bold text-center mb-8">
            Chat with NurtureBot!
          </h1>
          <div className="flex flex-row w-full h-max justify-center items-center gap-8">
            <input
              type="text"
              name=""
              id="message"
              className="p-2 rounded-md outline-1 outline-secondary-default bg-sky-100"
              placeholder="your message"
            />
            <button
              onClick={sendMessage}
              className="flex justify-center items-center text-white rounded-full hover:scale-110 duration-100 bg-primary-default p-1 px-2"
            >
              Send
            </button>
          </div>
          <div className="flex flex-col items-start w-full min-h-[400px] h-max bg-sky-100 p-4 rounded-md mb-12 gap-2 text-sm md:text-base">
            {messages.length === 0 && (
              <p className="self-start px-3 p-1 bg-sky-400 text-white rounded-full">
                Hi, how can I help you today?
              </p>
            )}
            {messages.map((msg, index) => (
              <p
                key={index}
                className={`p-1 px-3 rounded-full ${
                  msg.sender === "user"
                    ? "bg-primary-default text-white self-end"
                    : "bg-sky-400 text-white self-start"
                }`}
              >
                {msg.message}
              </p>
            ))}
          </div>
          <BottomNav currentPath={"/dashboard/history"} />
        </main>
      </>
    );
  }

  return <DashboardSuspense />;
}
