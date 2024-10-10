import { AnimatePresence, motion } from "framer-motion";
import { useJobPosting } from "../context/JobPostingProvider";
import JobPostingCard from "./JobPostCard";
export default function JobPosting() {
  const { jobFilters, setJobFilters, jobPosts } = useJobPosting();

  return (
    <section
      className={`container grid px-6 sm:mx-auto justify-stretch ${
        jobFilters.length === 0 ? "py-12" : ""
      }`}
      role="region"
    >
      <motion.ul
        className="container max-w-screen-lg space-y-10 justify-self-center sm:space-y-6"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={{
          hidden: {
            opacity: 0,
          },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // This controls the stagger timing
            },
          },
        }}
        onClick={(e) => {
          e.stopPropagation();
          const target = e.target as HTMLElement;
          const textContent = target?.textContent;
          if (
            textContent &&
            target.classList.contains("filter-tag") &&
            !jobFilters.includes(textContent)
          ) {
            setJobFilters((filter) => [...filter, textContent]);
          }
        }}
      >
        <AnimatePresence>
          {jobPosts.map((jobPost) => {
            return (
              <motion.li
                key={jobPost.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: { opacity: 1, scale: 1 },
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <JobPostingCard {...jobPost} />
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
