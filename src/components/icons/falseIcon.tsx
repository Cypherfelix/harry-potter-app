import { DetailedHTMLProps, HTMLAttributes } from "react";

const FalseIcon: React.FC = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
  return (
    <div className="relative mt-1 w-4 h-4 rounded-full dark:bg-rose-400 text-white flex items-center justify-center ring-2 dark:ring-rose-400 bg-red-400 ring-red-400">
      <svg width="6" height="6" className="overflow-visible" aria-hidden="true">
        <path
          d="M0 0L6 6M6 0L0 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};

export default FalseIcon;
