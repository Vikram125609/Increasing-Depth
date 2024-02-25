import React from "react";
import Link from "next/link";
import Layout from "./layout";
import { adminJobs } from ".";

import { getItem } from "@/app/utils";
export const revalidate = 36000000;

import axios, { AxiosResponse } from "axios";
export default async function Page({ params }: { params: { id: string } }) {
  const data: AxiosResponse<{
    code: number;
    message: string;
    data: { adminJobs: adminJobs[] };
  }> = await axios.post(`https://c2cjobs.org/api/v1/jobseeker/list-all-jobs`, {
    id: params.id,
  });

  const time = await getItem(params.id);

  return (
    <Layout>
      {data.data.data?.adminJobs.map((job) => {
        return (
          <div key={job._id}>
            <Link href={`/job/${job.id}`} passHref>
                <h1>{job.job_title}</h1>
            </Link>
          </div>
        );
      })}
      <h1>{time}</h1>
    </Layout>
  );
}
