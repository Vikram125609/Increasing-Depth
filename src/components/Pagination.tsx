"use client";
import { useRouter } from "next/navigation";

interface Props {
  page: string;
}

export default function Pagination({ page }: Props) {
  const router = useRouter();
  return (
    <div className="m-12 flex justify-center gap-4">
      <button
        className="cursor-pointer"
        onClick={() => router.push(`/find-job-usa/${+page - 1}`)}
      >
        Prev
      </button>
      <button
        className="cursor-pointer"
        onClick={() => router.push(`/find-job-usa/${+page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}
