import axios, { AxiosResponse } from "axios";
import Layout from "./layout";
export default async function Page() {
  const data: AxiosResponse<{
    code: number;
    message: string;
    data: { adminJobs: any[] };
  }> = await axios.post("https://c2cjobs.org/api/v1/jobseeker/list-all-jobs");
  return <Layout>
    {
      data.data.data?.adminJobs.map((jobs) => {
        return <>
          <h1>{jobs.job_title}</h1>
        </>
      })
    }
  </Layout>;
};