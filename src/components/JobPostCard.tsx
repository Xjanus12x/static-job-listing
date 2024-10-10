import { JobPosting } from "../models/JobPosting";
import { JobFilterTag } from "../ui/JobFilterTag";

type JobPostingCardProps = JobPosting;
export default function JobPostingCard({
  id,
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: JobPostingCardProps) {
  return (
    <article
      className={`relative  px-5 pt-10 pb-4 rounded-r-md bg-white font-bold sm:flex sm:gap-5 sm:p-8 sm:items-center shadow-lg
        ${
          isNew && featured
            ? "before:absolute before:inset-0 before:right-full before:-translate-x-1/2 before:w-[4.5px] before:bg-desaturated-dark-cyan before:rounded-l-md sm:before:w-1 sm:rounded-l-lg sm:rounded-r-lg"
            : ""
        }
        `}
    >
      <img
        className="absolute sm:bottom-auto size-12 bottom-full translate-y-2/4 sm:translate-y-0 sm:static sm:size-20"
        src={logo}
        alt={`${company} logo`}
      />

      <header className="pb-4 space-y-1 border-b border-b-dark-grayish-cyan sm:border-0 sm:p-0">
        <div className="flex items-start gap-4">
          <p className="text-desaturated-dark-cyan">{company}</p>
          {(isNew || featured) && (
            <p className="space-x-2">
              {isNew && (
                <span className="px-2 py-1 text-xs text-white uppercase rounded-full bg-desaturated-dark-cyan">
                  New!
                </span>
              )}
              {featured && (
                <span className="px-2 py-1 text-xs text-white uppercase rounded-full bg-very-dark-grayish-cyan">
                  Featured
                </span>
              )}
            </p>
          )}
        </div>
        <h2 className="text-very-dark-grayish-cyan">{position}</h2>
        <ul className="flex gap-5 font-normal text-dark-grayish-cyan">
          <li className="sm:pr-2">{postedAt}</li>
          <li className="list-disc sm:px-2">{contract}</li>
          <li className="list-disc sm:pl-2">{location}</li>
        </ul>
      </header>

      <ul className="flex flex-wrap gap-4 pt-4 sm:p-0 sm:ml-auto">
        <li>
          <JobFilterTag label={role} isRemovable={false} />
        </li>
        <li>
          <JobFilterTag label={level} isRemovable={false} />
        </li>

        {languages.map((language: string, index) => (
          <li key={index}>
            <JobFilterTag label={language} isRemovable={false} />
          </li>
        ))}
      </ul>
    </article>
  );
}
