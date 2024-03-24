import React from "react";
import Link from "next/link";
import Layout from "./layout";
import { adminJobs, searchParams } from ".";

import axios, { AxiosResponse } from "axios";
import Pagination from "@/components/Pagination";
import Filters from "@/components/Filters";
import { serverless_url } from "@/utils/API";
// import { filterParams } from "@/../../../common/src/index";
import { filterParams } from "@vikram125609/increasing-depth-common";
export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: searchParams;
}) {
  const payload: filterParams = {
    id: params.id,
    filterByJobTitle: searchParams.filterByJobTitle ? searchParams.filterByJobTitle : "",
    filterByJobSkills: searchParams.filterByJobSkills ? searchParams.filterByJobSkills : "",
    filterByVisa: searchParams.filterByVisa ? searchParams.filterByVisa : "",
    filterByJobLocation: searchParams.filterByJobLocation ? searchParams.filterByJobLocation : "",
    filterByJobDuration: searchParams.filterByJobDuration ? searchParams.filterByJobDuration : "",
  };
  const response: AxiosResponse<{
    code: number;
    message: string;
    data: { adminJobs: adminJobs[] };
  }> = await axios.post(
    `${serverless_url}/api/v1/jobseeker/list-all-jobs`,
    payload
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
