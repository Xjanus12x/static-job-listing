import data from "../data/data.json";

import { createContext, PropsWithChildren, useContext, useState } from "react";
import { JobPosting } from "../models/JobPosting";

type JobPostingContextType = {
  jobFilters: string[];
  setJobFilters: React.Dispatch<React.SetStateAction<string[]>>;
  jobPosts: JobPosting[];
  setJobPosts: React.Dispatch<React.SetStateAction<JobPosting[]>>;
};
const JobPostingContext = createContext<JobPostingContextType | null>(null);

export function useJobPosting() {
  const context = useContext(JobPostingContext);

  if (!context) {
    throw new Error("useJobPosting must be used within a JobPostingProvider");
  }

  return {
    jobFilters: context.jobFilters,
    setJobFilters: context.setJobFilters,
    jobPosts: context.jobPosts,
    setJobPosts: context.setJobPosts,
  };
}
type JobPostingProviderProps = PropsWithChildren & {};
export default function JobPostingProvider({
  children,
}: JobPostingProviderProps) {
  const [jobFilters, setJobFilters] = useState<string[]>([]);
  const [jobPosts, setJobPosts] = useState<JobPosting[]>(data);
  return (
    <JobPostingContext.Provider
      value={{ jobFilters, setJobFilters, jobPosts, setJobPosts }}
    >
      {children}
    </JobPostingContext.Provider>
  );
}
