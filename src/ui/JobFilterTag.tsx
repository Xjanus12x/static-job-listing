import { AnimatePresence, motion } from "framer-motion";
import removeIcon from "../assets/images/icon-remove.svg";

type JobFilterTagProps = {
  label: string;
  isRemovable?: boolean;
};

export function JobFilterTag({ label, isRemovable }: JobFilterTagProps) {
  return (
    <AnimatePresence>
      <motion.div
        className={`relative inline-flex overflow-hidden rounded-sm cursor-pointer bg-light-grayish-cyan-tablets text-desaturated-dark-cyan before:absolute before:inset-0 filter-tag group focus-visible:border-0 focus-visible:outline-dotted focus-visible:outline-2 focus-visible:outline-offset-2
          ${!isRemovable && "hover:bg-desaturated-dark-cyan"}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        tabIndex={0}
      >
        <span
          className={`px-2 py-1 font-bold text-desaturated-dark-cyan ${
            !isRemovable && "group-hover:text-white"
          }`}
        >
          {label}
        </span>
        {isRemovable && (
          <button
            className="px-2 py-1 outline-none bg-desaturated-dark-cyan group-hover:bg-very-dark-grayish-cyan group-focus-visible:bg-very-dark-grayish-cyan"
            aria-label={`Remove ${label}`}
          >
            <img src={removeIcon} aria-hidden="true" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
