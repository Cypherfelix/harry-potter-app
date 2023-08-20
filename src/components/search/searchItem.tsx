import { Character } from "@/types/character";
import Image from "next/image";
import { MouseEventHandler } from "react";

interface SearchItemProps {
  searchTerm?: string;
  character?: Character;
}

const SearchItem: React.FC<SearchItemProps> = ({ searchTerm, character }) => {
  const markTerm = (text: string) => {
    if (searchTerm) {
      const regex = new RegExp(searchTerm, "gi");
      const sp = document.createElement("span");
      sp.classList.add("bg-transparent", "text-sky-600", "dark:text-sky-400");
      const htmlText = text.replace(regex, (match) => {
        sp.innerText = match;
        return sp.outerHTML;
      });
      return <span dangerouslySetInnerHTML={{ __html: htmlText }} />;
    }
  };

  const handleClick: MouseEventHandler<HTMLLIElement> = () => {
    window.location.href = `/character/${character!.id}`;
  };
  return (
    <li
      className="cursor-pointer flex gap rounded-lg px-3 py-2 aria-selected:bg-slate-100 bg-slate-700/30 hover:bg-slate-700/50 dark:aria-selected:bg-slate-700/30 transition-colors duration-75 ease-in max-w-[98%]"
      onClick={handleClick}
    >
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 dark:ring-1 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0 mr-5">
        <Image
          alt=""
          src={character!.image}
          width={32}
          height={32}
          className="h-7 w-7 text-transparent rounded-full object-cover object-center"
        />
      </div>
      <div className="flex flex-auto flex-wrap gap-x-2">
        <div className="w-full flex-none text-sm font-medium dark:text-zinc-900 text-zinc-100">
          {markTerm(character!.name)}
        </div>
        <div className="text-xs dark:text-zinc-500 text-zinc-400">
          {character!.house != "" ? markTerm(character!.house) : "Unknown"}
        </div>

        <div
          className="ml-auto text-xs dark:text-zinc-400 text-zinc-500"
          aria-label="2019 until Present"
        >
          {character!.dateOfBirth || "Unknown"}
        </div>
      </div>
    </li>
  );
};

export default SearchItem;
