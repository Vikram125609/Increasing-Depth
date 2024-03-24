import React from "react";
import Link from "next/link";
import Layout from "./layout";
import { adminJobs } from ".";

import axios, { AxiosResponse } from "axios";
import Pagination from "@/components/Pagination";
import { domain } from "@/utils/API";
export default async function Page({ params }: { params: { id: string } }) {
  const response: AxiosResponse<{
    code: number;
    message: string;
    data: { adminJobs: adminJobs[] };
  }> = await axios.post(`http://${domain}/api/v1/jobseeker/list-all-jobs`, {
    id: params.id,
  });
  return (
    <Layout>
      {response.data.data?.adminJobs.map((job) => {
        return (
          <div key={job._id}>
            <Link href={`/job/${job.id}`} passHref>
              <h1>{job.job_title}</h1>
            </Link>
          </div>
        );
      })}
      <Pagination page={params.id} />
    </Layout>
  );
}
