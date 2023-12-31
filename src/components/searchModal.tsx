import { ChangeEvent, useEffect, useRef } from "react";
import SearchIcon from "./icons/searchIcon";
import SearchResults from "./search/searchResults";
import SearchNoResults from "./search/searchNoResult";
import SearchInfo from "./search/searchInfo";
import { useAppDispatch, useAppSelector } from "@/store";
import { setSearchToggle, setSearchValue } from "@/store/slice/searchSlice";
import { filterCharacters } from "@/store/slice/charactersSlice";

const SearchModal: React.FC = ({}) => {
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const value = useAppSelector((selector) => selector.search.value);
  const searchToggle = useAppSelector(
    (selector) => selector.search.searchToggle
  );
  const filteredCharacters = useAppSelector(
    (selector) => selector.characters.filteredCharacters
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        dispatch(setSearchToggle(false));
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [searchContainerRef, dispatch]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    dispatch(filterCharacters(searchTerm));
    dispatch(setSearchValue(searchTerm));
  };

  return (
    searchToggle && (
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
                    value={value!}
                    onChange={handleSearch!}
                  />
                </div>
                <div className="border-t border-slate-200 dark:bg-white px-2 py-3 empty:hidden border-slate-400/10 bg-slate-800">
                  {value!.length > 0 ? (
                    filteredCharacters!.length > 0 ? (
                      <SearchResults />
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
    )
  );
};

export default SearchModal;
