"use client";

import { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";

const SAVE_STATUS = {
  SAVING: "⏳",
  DEFAULT: "Save",
  ERROR: "Try again!",
  SAVED: "Saved ✅",
};

export default function ProfileDetails() {
  const [user, error] = useAuth();
  const [saving, setSaving] = useState(SAVE_STATUS.DEFAULT);
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    age: "",
    gender: "",
  });

  useEffect(() => {
    if (user) getProfileDetails();
  }, [user]);

  const getProfileDetails = async () => {
    const token = await user.getIdToken();
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error(error));
  };

  const handleSubmit = async () => {
    setSaving(SAVE_STATUS.SAVING);
    const token = await user.getIdToken(true);
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((response) => {
        if (response.status === 200) {
          setSaving(SAVE_STATUS.SAVED);
          setTimeout(() => {
            setEditing(false);
            setSaving(SAVE_STATUS.DEFAULT);
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

  if (!editing)
    return (
      <>
        <section className="flex flex-col border-2 border-gray-300 rounded-lg p-4 w-full md:max-w-[800px] h-max items-center justify-between gap-8 text-center md:text-left overflow-scroll no-scrollbar">
          <div className="flex flex-row justify-between items-center w-full h-max">
            <h1 className="text-xl font-bold text-left w-full">Your Profile</h1>
            <button
              onClick={() => setEditing(true)}
              className="border-2 border-primary-default rounded-md p-1 text-sm w-18"
            >
              Edit
            </button>
          </div>
          <div className="flex flex-col md:flex-row w-full md:max-w-[800px] h-max items-center justify-start gap-8 text-center md:text-left overflow-scroll no-scrollbar">
            <input
              id="age-field"
              disabled
              type="text"
              value={profile?.age || ""}
              placeholder="Age"
              className="input input-primary w-[100px]"
            />
            <input
              id="age-field"
              disabled
              type="text"
              value={profile?.gender || ""}
              placeholder="Gender"
              className="input input-primary w-[200px]"
            />
          </div>
        </section>
      </>
    );

  return (
    <>
      <section className="flex flex-col border-2 border-gray-300 rounded-lg p-4 w-full md:max-w-[800px] h-max items-center justify-between gap-8 text-center md:text-left overflow-scroll no-scrollbar">
        <div className="flex flex-row justify-between items-center w-full h-max">
          <h1 className="text-xl font-bold text-left w-max">Your Profile</h1>
          <button
            onClick={handleSubmit}
            className="border-2 border-primary-default rounded-md p-1 text-sm w-18"
          >
            {saving}
          </button>
        </div>
        <div className="flex flex-col md:flex-row w-full md:max-w-[800px] h-max items-center justify-start gap-8 text-center md:text-left overflow-scroll no-scrollbar">
          <input
            id="age-field"
            type="text"
            value={profile?.age || ""}
            placeholder="Age"
            onChange={(e) => setProfile({ ...profile, age: e.target.value })}
            className="input input-primary w-[100px]"
          />
          <select
            id="gender-field"
            defaultValue={"Gender"}
            className="select select-primary w-max"
            onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
          >
            <option disabled>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Non-binary</option>
            <option>Other</option>
          </select>
        </div>
      </section>
    </>
  );
}
