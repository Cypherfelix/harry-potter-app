import DarkIcon from "../icons/darkIcon";
import LightIcon from "../icons/lightIcon";
import ThemeDropDown from "./headerThemeDropDown";

const HeaderThemeBar: React.FC<{
  setToggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: boolean;
}> = ({ setToggleTheme, toggleTheme }) => {
  return (
    <div className="relative z-10">
      <label className="sr-only">Theme</label>
      <button
        className="flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5"
        onClick={() => setToggleTheme(!toggleTheme)}
      >
        <LightIcon />

        <DarkIcon className="hidden" />
      </button>

      {toggleTheme && <ThemeDropDown />}
    </div>
  );
};

export default HeaderThemeBar;
