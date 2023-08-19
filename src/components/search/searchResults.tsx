import { Character } from "@/types/character";
import SearchItem from "./searchItem";

interface SearchResultsProps { 
  filteredCharacters?: Character[];
  searchTerm?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({filteredCharacters, searchTerm}) => {
  return (
    <ul className="space-y-4 max-h-96 overflow-y-auto scrollbar ">
      {filteredCharacters!.map((character) => (
        <SearchItem
          key={character.id}
          character={character}
          searchTerm={searchTerm}
        />
      ))}
    </ul>
  );
};

export default SearchResults;
