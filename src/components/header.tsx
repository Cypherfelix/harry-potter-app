import Link from "next/link";
import { useEffect, useState } from "react";
import GithubIcon from "./icons/githubIcon";
import HeaderLogo from "./header/headerLogo";
import HeaderSearch from "./header/headerSearch";
import HeaderThemeBar from "./header/headerThemeBar";

interface Props {
  setToggleSearch?: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSearch?: boolean;
  scrollToggle?: boolean;
}
export const Header: React.FC<Props> = ({
  setToggleSearch,
  toggleSearch,
  scrollToggle = true,
}) => {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between ${
        scrollToggle &&
        isScrolled &&
        " shadow-md shadow-slate-900/5 backdrop-blur-sm bg-black/30"
      } px-4 py-5  transition duration-500 dark:shadow-none sm:px-6 lg:px-8 dark:bg-transparent w-full`}
    >
      <HeaderLogo />
      <HeaderSearch
        setToggleSearch={setToggleSearch!}
        toggleSearch={toggleSearch!}
      />

      <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
        <HeaderThemeBar
          setToggleTheme={setToggleTheme}
          toggleTheme={toggleTheme}
        />

        <Link
          className="group"
          aria-label="GitHub"
          href="https://github.com/Cypherfelix/harry-potter-app"
          target="_blank"
        >
          <GithubIcon />
        </Link>
      </div>
    </header>
  );
};

export default Header;
