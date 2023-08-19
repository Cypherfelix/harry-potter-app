import { FC, SVGProps } from "react";

const ThemeCard: FC<{
  tittle: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
  enabled: boolean;
}> = ({ tittle, Icon, onClick, enabled }) => {
  return (
    <li
      className={`flex cursor-pointer select-none items-center rounded-[0.625rem] p-1 dark:text-slate-700  hover:text-sky-500 ${
        enabled ? "text-sky-500" : "text-slate-400"
      }`}
      onClick={onClick}
    >
      <div className="rounded-md dark:bg-white p-1 shadow ring-1 dark:ring-slate-900/5 bg-slate-700 ring-inset ring-white/5">
        <Icon className="h-4 w-4 fill-slate-400" />
      </div>
      <div className="ml-3">{tittle}</div>
    </li>
  );
};

export default ThemeCard;
