"use client";
import { jobSearchFilter } from "@/utils/atom";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Filters() {
  const { replace } = useRouter();
  const [filter, setFilter] = useRecoilState(jobSearchFilter);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    params.set("filterByJobTitle", filter.filterByJobTitle);
    params.set("filterByJobSkills", filter.filterByJobSkills);
    params.set("filterByVisa", filter.filterByVisa);
    params.set("filterByJobLocation", filter.filterByJobLocation);
    params.set("filterByJobDuration", filter.filterByJobDuration);
    replace(`${pathname}?${params.toString()}`); 
  };
  return (
    <div className="flex gap-5 mt-5">
      <input
        className="p-2"
        onChange={handleChange}
        type="text"
        name="filterByJobTitle"
        value={filter.filterByJobTitle}
        style={{ border: "1px solid black", color: "black" }}
        placeholder="filterByJobTitle"
        id=""
      />
      <input
        className="p-2"
        onChange={handleChange}
        type="text"
        name="filterByJobSkills"
        value={filter.filterByJobSkills}
        placeholder="filterByJobSkills"
        style={{ border: "1px solid black", color: "black" }}
        id=""
      />
      <input
        className="p-2"
        onChange={handleChange}
        type="text"
        name="filterByVisa"
        value={filter.filterByVisa}
        style={{ border: "1px solid black", color: "black" }}
        placeholder="filterByVisa"
        id=""
      />
      <input
        className="p-2"
        onChange={handleChange}
        type="text"
        name="filterByJobLocation"
        placeholder="filterByJobLocation"
        value={filter.filterByJobLocation}
        style={{ border: "1px solid black", color: "black" }}
        id=""
      />
      <input
        className="p-2"
        onChange={handleChange}
        type="text"
        name="filterByJobDuration"
        placeholder="filterByJobDuration"
        value={filter.filterByJobDuration}
        style={{ border: "1px solid black", color: "black" }}
        id=""
      />
      <button onClick={handleSearch} className="bg-blue-500 p-2">
        Search
      </button>
    </div>
  );
}
