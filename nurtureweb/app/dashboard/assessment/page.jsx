"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/Loading";
import AssessmentFlow from "@/components/AssessmentFlow";

export default function AssessmentPage() {
  // get type of assessment
  const searchParams = useSearchParams();
  const assessmentType = searchParams.get("type");

  // store assessment
  const [assessment, setAsssessment] = useState(null);

  // get assessment data on page load
  useEffect(() => getAssessment, []);

  // fetch request for assessment data
  const getAssessment = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/assessment/${assessmentType}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setAsssessment(data))
      .catch((error) => console.error(error));
  };

  if(!assessment) return <Loading />;

  return (
    <>
      <main className="flex flex-col justify-start items-center p-8 h-max min-h-screen w-full gap-8">
        <section className="flex flex-col w-full md:max-w-[800px] h-max items-start justify-between gap-8 text-center md:text-left">
          <div className="flex flex-row justify-between items-center w-full h-max">
            <h1 className="text-2xl font-bold text-left w-full">
              🌸 Initial Assessment
            </h1>
            <a href="/dashboard" className="text-sm h-max w-max p-1 border-2 border-primary-default rounded-lg">Back</a>
          </div>
          <h3 className="text-xl font-bold text-left w-full">
            {assessment?.type[0].toUpperCase() + assessment?.type.slice(1)}
          </h3>
        </section>
        <AssessmentFlow assessment={assessment} />
      </main>
    </>
  );
}
