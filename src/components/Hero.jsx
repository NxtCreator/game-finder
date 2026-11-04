import SearchBar from "./SearchBar";
import forest from "../assets/Forest.webp";

const Hero = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="flex flex-col relative overflow-hidden items-center justify-center text-center py-24">
      <img
        src={forest}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-background/60" />

      <div className="max-w-3xl mx-auto px-4 z-10">
        <h1 className="text-foreground text-4xl md:text-5xl font-display font-bold mb-2">
          Find games you can actually <span className="text-accent">play</span>
        </h1>
        <p className="text-foreground/80 text-lg font-body">
          Search thousands of games and see what your machine can run
        </p>
      </div>

      <div className="mx-auto w-full max-w-xl px-4 py-8 z-10">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </section>
  );
};
export default Hero;
