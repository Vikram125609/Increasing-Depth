import axios, { AxiosResponse } from "axios";
import Layout from "./layout";
import { job } from ".";

export default async function Page({ params }: { params: { id: string } }) {
  const data: AxiosResponse<{
    code: number;
    message: string;
    data: { job_detail: job };
  }> = await axios.get(`https://c2cjobs.org/api/v1/general/job/${params.id}`, {
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFjYmQwODc1MTY1NTQ1ZjVhMTgxYTkiLCJlbWFpbCI6InByZW1hbmFuZGppbWFoYXJqYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQweC5nVGpKMGVCaDlVOGlxcWlEYWxPeENTUTJCUG8vOUc4LjZMR0FBRjkzTjRqNm5oeFZ3eSIsImlhdCI6MTcwNzE1MTA0Nn0.Nf0XR5Y8ZFrhfZpDjiSqX0igSxQZ3_JBsiw0dL1pZRQ`,
      role: "teamlead",
    },
  });
  return (
    <Layout>
      <div>Job ID {data.data.data?.job_detail?.id}</div>
      <div>Job Title {data.data.data?.job_detail?.job_title}</div>
      <div>Job Description {data.data.data?.job_detail?.job_description}</div>
      <div>Job Skills {data.data.data?.job_detail?.skills?.join(", ")}</div>
      <div>Job Type {data.data.data?.job_detail?.job_type?.join(", ")}</div>
    </Layout>
  );
}
