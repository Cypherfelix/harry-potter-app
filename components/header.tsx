import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white shadow-xl">
      <Logo />
      <SearchBar />
      <NavLinks />
    </header>
  );
};

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="text-5xl font-bold tracking-tighter text-yellow-400 hover:text-yellow-500 transition duration-300"
    >
      HP World
    </Link>
  );
};

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-1/2">
      <input
        type="text"
        placeholder="Search the magic..."
        className="w-full p-2 rounded-full bg-opacity-50 bg-white text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 shadow-inner"
      />
      <span className="absolute top-3 right-3 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-current"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a7 7 0 100 14A7 7 0 009 2zM7 9a2 2 0 114 0 2 2 0 01-4 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

const NavLinks: React.FC = () => {
  return (
    <nav className="hidden md:flex space-x-4">
      {/* Example links. Uppercase + underline on hover for emphasis */}
      <a
        href="#"
        className="uppercase hover:text-yellow-400 hover:underline transition duration-300"
      >
        Houses
      </a>
      <a
        href="#"
        className="uppercase hover:text-yellow-400 hover:underline transition duration-300"
      >
        Spells
      </a>
      <a
        href="#"
        className="uppercase hover:text-yellow-400 hover:underline transition duration-300"
      >
        About
      </a>
    </nav>
  );
};
