import React from "react";
import Link from "next/link";

import { getItem } from "@/app/utils";
export const revalidate = 3600;

export default async function Page() {

  const time = await getItem('1');
  console.log('data2',time);
  return (
      <h1>{time}</h1>
  );
}
