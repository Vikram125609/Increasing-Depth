import React from "react";
import Link from "next/link";
import Layout from "./layout";
import { adminJobs, searchParams } from ".";

import axios, { AxiosResponse } from "axios";
import Pagination from "@/components/Pagination";
import Filters from "@/components/Filters";
import { domain_medha_ec2 } from "@/utils/API";
export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: searchParams;
  }) {
  const response: AxiosResponse<{
    code: number;
    message: string;
    data: { adminJobs: adminJobs[] };
  }> = await axios.post(
    `https://${domain_medha_ec2}/api/v1/jobseeker/list-all-jobs`,
    {
      id: params.id,
      filterByJobTitle: searchParams.filterByJobTitle,
      filterByJobSkills: searchParams.filterByJobSkills,
      filterByVisa: searchParams.filterByVisa,
      filterByJobLocation: searchParams.filterByJobLocation,
      filterByJobDuration: searchParams.filterByJobDuration,
    }
  );
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
      <Filters />
      <Pagination page={params.id} />
    </Layout>
  );
}
