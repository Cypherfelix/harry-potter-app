import Link from "next/link";
import { useState } from "react";

export const Header: React.FC = () => {
  const [opened, setOpened] = useState(false);
  return (
    <nav className="relative flex items-center flex-wrap bg-slate-800 p-3 lg:space-x-20">
      <Logo />

      <div className="absolute block lg:hidden right-10">
        <button
          onClick={(e) => {
            setOpened(!opened);
          }}
          className="flex items-center px-3 py-2 border rounded text-yellow-200 border-yellow-400 hover:text-white hover:border-white transition-all duration-[1s] rotate-180 ease-in-out"
        >
          {opened ? (
            <svg
              className="fill-current h-3 w-3 transition-all duration-[1s] ease-in-out transform rotate-180"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Close</title>
              <path
                fillRule="evenodd"
                d="M12.94 10l6.364-6.364a1 1 0 1 0-1.414-1.414L11.94 8.586 5.576 2.222A1 1 0 1 0 4.162 3.636L10.526 10l-6.364 6.364a1 1 0 1 0 1.414 1.414L11.94 11.414l6.364 6.364a1 1 0 1 0 1.414-1.414L12.94 10z"
              />
            </svg>
          ) : (
            <svg
              className="fill-current h-3 w-3 transition-all duration-[1s] ease-out"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`absolute bg-slate-800 w-60 right-0 flex flex-col p-6 pb-8 px-4 top-16 space-y-3 rounded-b-lg border-b border-b-gray-700 hover:bg-gray-800 lg:p-3 lg:pb-4 lg:border-none lg:flex-row lg:relative lg:w-1/2 cs:w-3/4 lg:top-0 lg:justify-center lg:space-x-6`}
      >
        <SearchBar show={true} className="" />
        <NavLinks />
      </div>
    </nav>
  );
};

const Logo: React.FC = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center flex-shrink-0 text-white mr-6"
    >
      <svg
        width="54"
        height="54"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <circle cx="50" cy="50" r="45" fill="#FFD700" />
        <path
          d="M42 25 L35 50 L42 75 L65 75 L75 50 L65 25 L42 25"
          fill="#FF0000"
        />
        <path d="M50 15 Q45 10 40 15 L42 25 L50 15" fill="#000000" />
        <path d="M53 50 L60 42 L70 49 L63 58 L53 50" fill="#000000" />
        <rect x="42" y="75" width="23" height="10" fill="#000000" />
      </svg>

      <span className="font-semibold text-xl tracking-tight">Harry Porter</span>
    </Link>
  );
};

const SearchBar: React.FC<{
  show: boolean;
  className?: string | undefined;
}> = ({ show, className }) => {
  return show ? (
    <form className="flex items-center lg:w-1/2">
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  ) : (
    <div></div>
  );
};

const NavLinks: React.FC = () => {
  return (
    <>
      <NavLink href="#" text="Houses" />
      <NavLink href="#" text="Spells" />
      <NavLink href="#" text="About" />
    </>
  );
};

const NavLink: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="block mt-4 lg:inline-block lg:mt-0 uppercase text-yellow-400 hover:text-yellow-500 font-serif tracking-wider relative transition duration-300 before:content-[''] before:absolute before:w-0 before:h-1 before:bg-yellow-400 before:bottom-0 before:left-0 before:transition-width before:duration-300 hover:before:w-full  mr-4"
    >
      {text}
    </a>
  );
};

