import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <label
      className="flex items-center text-foreground gap-3 rounded-xl bg-card px-4 py-3 
                        border border-border focus-within:ring-2 focus-within:ring-glow 
                        focus-within:ring-offset-2 focus-within:ring-offset-background transition-colors
                        cursor-text"
    >
      <Search className="w-6 h-6 text-accent" />
      <input
        type="search"
        placeholder="Search games..."
        aria-label="Search games"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-transparent focus-visible:outline-none 
                    placeholder:text-muted-foreground text-lg font-body"
      />
    </label>
  );
};
export default SearchBar;
