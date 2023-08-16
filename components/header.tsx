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
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

const NavLinks: React.FC = () => {
  return (
    <nav className="hidden md:flex space-x-6">
      <NavLink href="#" text="Houses" />
      <NavLink href="#" text="Spells" />
      <NavLink href="#" text="About" />
    </nav>
  );
};

const NavLink: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="uppercase text-yellow-400 hover:text-yellow-500 font-serif tracking-wider relative transition duration-300 before:content-[''] before:absolute before:w-0 before:h-1 before:bg-yellow-400 before:bottom-0 before:left-0 before:transition-width before:duration-300 hover:before:w-full"
    >
      {text}
    </Link>
  );
};

