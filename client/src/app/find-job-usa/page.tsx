import { getItem } from "@/app/cache";
import React from "react";
import Layout from "./layout";

export const revalidate = 3600;
// If the url is not changing dynamically this will cache the data for the time 3600 seconds

export default async function Page() {
  const time = await getItem("1");
  console.log("data2", time);
  return (
    <Layout>
      <h1>{time}</h1>
    </Layout>
  );
}
