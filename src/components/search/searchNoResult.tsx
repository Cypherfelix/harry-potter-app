const SearchNoResults: React.FC = () => {
  return (
    <div className="bg-transparent px-16 py-20 text-center">
      <h2 className="font-semibold text-zinc-100">No results found</h2>
      <p className="mt-2 text-sm leading-6 text-zinc-400">
        We can’t find anything with that term at the moment, try searching
        something else use commas for multiple search query.
      </p>
    </div>
  );
};

export default SearchNoResults;
