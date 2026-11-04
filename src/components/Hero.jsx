import SearchBar from "./SearchBar";

const Hero = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-foreground text-4xl md:text-5xl font-display font-bold mb-2">
          Find games you can actually <span className="text-accent">play</span>
        </h1>
        <p className="text-muted-foreground text-lg font-body">
          Search thousands of games and see what your machine can run
        </p>
      </div>

      <div className="mx-auto w-full max-w-xl px-4 py-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </section>
  );
};
export default Hero;
