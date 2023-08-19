import { useEffect, useRef } from "react";
import SearchIcon from "./icons/searchIcon";
import SearchResults from "./search/searchResults";
import { Character } from "@/types/character";
import SearchNoResults from "./search/searchNoResult";
import SearchInfo from "./search/searchInfo";

interface SearchModalProps {
  setToggleSearch?: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm?: string;
  filteredCharacters?: Character[];

}
const SearchModal: React.FC<SearchModalProps> = ({ setToggleSearch, filteredCharacters, handleSearch, searchTerm, setSearchTerm }) => {
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setToggleSearch!(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setToggleSearch, searchContainerRef]);

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur"></div>
      <div className="fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]">
        <div
          ref={searchContainerRef}
          className="mx-auto transform-gpu overflow-hidden rounded-xl dark:bg-white shadow-xl bg-slate-800 ring-1 ring-slate-700 sm:max-w-xl"
        >
          <div>
            <form>
              <div className="group relative flex h-12">
                <SearchIcon className="pointer-events-none absolute left-4 top-0 h-full w-5 dark:fill-slate-400 fill-slate-500" />

                <input
                  className="flex-auto appearance-none bg-transparent pl-12 dark:text-slate-900 outline-none placeholder:text-slate-400 focus:w-full focus:flex-none text-white sm:text-sm pr-4"
                  placeholder="Find something..."
                  type="search"
                  value={searchTerm!}
                  onChange={handleSearch!}
                />
              </div>
              <div className="border-t border-slate-200 dark:bg-white px-2 py-3 empty:hidden border-slate-400/10 bg-slate-800">
                {searchTerm!.length > 0 ? (
                  filteredCharacters!.length > 0 ? (
                    <SearchResults
                      filteredCharacters={filteredCharacters}
                      searchTerm={searchTerm}
                    />
                  ) : (
                    <SearchNoResults />
                  )
                ) : (
                  <SearchInfo />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
