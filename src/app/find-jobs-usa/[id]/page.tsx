import React from "react";
import Layout from "./layout";
import axios, { AxiosResponse } from "axios";
export default async function Page({ params }: { params: { id: string } }) {
  const data: AxiosResponse<{
    code: number;
    message: string;
    data: { adminJobs: any[] };
  }> = await axios.post(`https://c2cjobs.org/api/v1/jobseeker/list-all-jobs`, {
    id: params.id,
  });
  
  return (
    <Layout>
      {data.data.data?.adminJobs.map((jobs) => {
        return (
          <>
            <h1>{jobs.job_title}</h1>
          </>
        );
      })}
    </Layout>
  );
}
