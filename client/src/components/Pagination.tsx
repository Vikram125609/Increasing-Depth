"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface Props {
  page: string;
}

export default function Pagination({ page }: Props) {
  const { replace } = useRouter();
  const pathname = usePathname().split("/").slice(0, -1).join("/");
  const searchParams = useSearchParams();
  return (
    <div className="m-12 flex justify-center gap-4">
      <button
        disabled={+page === 1}
        className="cursor-pointer"
        onClick={() => {
          replace(`${pathname}/${+page - 1}?${searchParams.toString()}`);
        }}
      >
        Prev
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          replace(`${pathname}/${+page + 1}?${searchParams.toString()}`);
        }}
      >
        Next
      </button>
    </div>
  );
}
