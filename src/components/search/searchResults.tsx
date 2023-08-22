import SearchItem from "./searchItem";
import { useAppSelector } from "@/store";

const SearchResults: React.FC = () => {
  const {
    search: { value },
    characters: { filteredCharacters },
  } = useAppSelector((selector) => selector);
  return (
    <ul className="space-y-4 max-h-96 overflow-y-auto scrollbar ">
      {filteredCharacters!.map((character) => (
        <SearchItem
          key={character.id}
          character={character}
          searchTerm={value}
        />
      ))}
    </ul>
  );
};

export default SearchResults;
