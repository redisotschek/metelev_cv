export type JobInfo = {
  title: string,
  company:string,
  date:string,
  points: Array<string>,
  results: Array<string>,
}

export type JobInfoList = Array<JobInfo>;

export type DegreeInfo = {
  title: string,
  school: string,
  location: string,
  date: string,
  courses: string,
  points: Array<string>
}

export type Section = {
  title: string,
  id: string,
}