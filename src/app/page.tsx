"use client";
import Krshna from "@/components/Krshna";
import Radha from "@/components/Radha";
import { useState } from "react";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("Radha");
  return (
    <>
      <h1>Jaha Shree Radha Waha Nahi Koi Badha {currentTab}</h1>
      <div className="space-x-4">
        <button onClick={() => setCurrentTab("Radha")}>Radha</button>
        <button onClick={() => setCurrentTab("Krshna")}>Krshna</button>
        {currentTab === "Radha" && <Radha />}
        {currentTab === "Krshna" && <Krshna />}
      </div>
    </>
  );
}
