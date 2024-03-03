"use client";

import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const SAVE_STATUS = {
    SAVING: "Saving ⏳",
    DEFAULT: "Submit",
    ERROR: "Try again!",
    SAVED: "Submitted! 🎉",
}

export default function AssessmentFlow({ assessment }) {
  const [user, error] = useAuth();
  const router = useRouter();
  const [question, setQuestion] = useState(0);
  const [responses, setResponses] = useState(
    new Array(assessment?.questions?.length).fill(-1)
  );
  const [saving, setSaving] = useState(SAVE_STATUS.DEFAULT);

  const nextQuestion = () => {
    if (question < assessment.questions.length - 1) {
      setQuestion(question + 1);
    }
  };

  const prevQuestion = () => {
    if (question > 0) {
      setQuestion(question - 1);
    }
  };

  const handleSubmit = async () => {
    if (responses.includes(-1)) return;
    if (!user) return;
    setSaving(SAVE_STATUS.SAVING);
    const token = await user.getIdToken();
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/assessment/${assessment?.type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        responses,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          setSaving(SAVE_STATUS.SAVED);
          setTimeout(() => {
            router.push("/dashboard");
          }, 500);
        } else {
          setSaving(SAVE_STATUS.ERROR);
        }
      })
      .catch((error) => {
        console.error(error);
        setSaving(SAVE_STATUS.ERROR);
      });
  };

  return (
    <>
      <section className="flex flex-col w-full h-max gap-8">
        <div className="flex flex-col gap-8 items-center justify-center h-max w-full text-center">
          <h3 className="text-xl font-bold w-full">
            {assessment?.questions[question]}
          </h3>
          {assessment?.options?.map((option, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setResponses((prev) => {
                    const newResponses = [...prev];
                    newResponses[question] = index;
                    return newResponses;
                  });
                  nextQuestion();
                }}
                className="btn btn-secondary hover:btn-accent active:btn-accent text-base w-full h-max p-2 max-w-[300px]"
              >
                {option}
              </button>
            );
          })}
        </div>
        <div className="flex flex-row justify-center items-center gap-0 w-full h-max join mt-8">
          <button
            onClick={prevQuestion}
            className={"btn-secondary join-item btn btn-square text-xl"}
          >
            ⏪
          </button>
          {assessment?.questions?.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setQuestion(index)}
                className={
                  responses[index] >= 0
                    ? "btn-success join-item btn btn-square hidden md:block"
                    : question === index
                    ? "btn-primary join-item btn btn-square"
                    : "join-item btn btn-square hidden md:block"
                }
              >
                {index}
              </button>
            );
          })}
          <button
            onClick={nextQuestion}
            className={"btn-secondary join-item btn btn-square text-xl"}
          >
            ⏩{" "}
          </button>
        </div>
        <button
          onClick={handleSubmit}
          className="btn btn-primary w-max self-center text-white text-lg"
        >
          {saving}
        </button>
      </section>
    </>
  );
}
