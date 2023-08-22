import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../icons/searchIcon";
import { setSearchToggle } from "@/store/slice/searchSlice";

const HeaderSearch: React.FC<{
  setToggleSearch: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSearch: boolean;
}> = ({ setToggleSearch, toggleSearch }) => {
  const searchToggle = useSelector(
    (selector: RootState) => selector.search.searchToggle
  );

  const dispatch = useDispatch();

  const handleSearch = () => dispatch(setSearchToggle(true));


  return (
    <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
      <button
        type="button"
        className="group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 dark:md:bg-slate-800/75 dark:md:ring-inset dark:md:ring-white/5 dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500 lg:w-96 text-white"
        onClick={() => {
          handleSearch();
        }}
      >
        <SearchIcon className="fill-white" />
        <span className="sr-only md:not-sr-only md:ml-2 text-white md:dark:text-slate-400">
          Search characters
        </span>
        <kbd className="ml-auto hidden font-medium text-slate-400 dark:text-slate-500 md:block">
          <kbd className="font-sans">Ctrl </kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>
      <div
        style={{
          position: "fixed",
          top: "1px",
          left: "1px",
          width: "1px",
          height: "0",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          borderWidth: 0,
          display: "none",
        }}
      ></div>
    </div>
  );
};

export default HeaderSearch;
