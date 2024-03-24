export interface adminJobs {
    _id:string
    id: string
    job_title: string
    skills: string[]
    time: string
    createdAt: string
    updatedAt: string
}

export interface searchParams {
    filterByJobTitle: string
    filterByJobSkills: string
    filterByVisa: string
    filterByJobLocation: string
    filterByJobDuration: string
}