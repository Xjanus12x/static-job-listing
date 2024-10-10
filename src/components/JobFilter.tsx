import data from "../data/data";
import { JobFilterTag } from "../ui/JobFilterTag";
import { useJobPosting } from "../context/JobPostingProvider";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect } from "react";

export function JobFilter() {
  const { jobFilters, setJobFilters, setJobPosts } = useJobPosting();

  useEffect(() => {
    if (jobFilters.length > 0) {
      setJobPosts((jobs) => {
        return jobs.filter((job) => {
          if (
            jobFilters.includes(job.role) ||
            jobFilters.includes(job.level) ||
            jobFilters.some((item) => job.languages.includes(item))
          ) {
            return job;
          }
        });
      });
    } else {
      setJobPosts(data);
    }
  }, [jobFilters, setJobFilters]);

  const removeFilter = useCallback(
    (teBeRemoveFilter: string) => {
      setJobFilters((currentFilter) => {
        if (currentFilter.includes(teBeRemoveFilter)) {
          return currentFilter.filter((filter) => filter !== teBeRemoveFilter);
        }
        return currentFilter;
      });
    },
    [setJobFilters]
  );

  return (
    <header className="relative -top-10" tabIndex={0}>
      {jobFilters.length > 0 && (
        <div className="flex max-w-screen-lg p-5 mx-auto overflow-hidden bg-white rounded-md shadow-lg sm:px-9">
          <ul
            className="flex flex-wrap items-center w-full gap-4 "
            onClick={(e) => {
              e.stopPropagation();
              const target = e.target as HTMLElement;
              const textContent = target?.textContent;
              if (textContent && target.classList.contains("filter-tag")) {
                removeFilter(textContent);
              }
            }}
          >
            <AnimatePresence>
              {jobFilters.map((jobFilter) => (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  key={jobFilter}
                >
                  <JobFilterTag label={jobFilter} isRemovable={true} />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          <button
            className="font-bold bg-white hover:text-desaturated-dark-cyan hover:underline text-dark-grayish-cyan"
            onClick={() => {
              setJobFilters([]);
            }}
          >
            Clear
          </button>
        </div>
      )}
    </header>
  );
}
