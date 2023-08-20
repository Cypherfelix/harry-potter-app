import { DetailedHTMLProps, HTMLAttributes } from "react";

const CorrectIcon: React.FC = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
  return (
    <div
      className={`${props.className} relative mt-1 w-4 h-4 rounded-full dark:bg-cyan-500 text-white flex items-center justify-center ring-2 dark:ring-cyan-500 bg-sky-500 ring-sky-500`}
    >
      <svg
        width="6"
        height="4.5"
        className="overflow-visible"
        aria-hidden="true"
      >
        <path
          d="M6 0L2 4.5L0 2.5"
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

export default CorrectIcon;
