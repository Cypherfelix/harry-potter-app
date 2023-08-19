import SearchItem from "./searchItem";

const SearchResults: React.FC<{}> = ({}) => {
  return (
    <ul className="space-y-4 max-h-96 overflow-y-auto scrollbar ">
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </ul>
  );
};

export default SearchResults;
