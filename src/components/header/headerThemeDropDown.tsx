import { useState } from "react";
import DarkIcon from "../icons/darkIcon";
import LightIcon from "../icons/lightIcon";
import SystemIcon from "../icons/systemIcon";
import ThemeCard from "./headerThemeCard";

const ThemeDropDown: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("dark");
  return (
    <ul
      id="themeDropDown"
      className="absolute left-1/2 top-full mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl dark:bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 dark:ring-black/5 bg-black/50 ring-white/5"
    >
      <ThemeCard
        tittle="Light"
        Icon={LightIcon}
        enabled={theme === "light"}
        onClick={() => setTheme("light")}
      />
      <ThemeCard
        tittle="Dark"
        Icon={DarkIcon}
        enabled={theme === "dark"}
        onClick={() => setTheme("dark")}
      />
      <ThemeCard
        tittle="System"
        Icon={SystemIcon}
        enabled={theme === "system"}
        onClick={() => setTheme("system")}
      />
    </ul>
  );
};

export default ThemeDropDown;
