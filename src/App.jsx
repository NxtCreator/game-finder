import { useState } from "react";
import GameSection from "./components/GameSection.jsx";
import Header from "./components/Header.jsx";
import GAMES from "./data/data.js";
import Hero from "./components/Hero.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = GAMES.filter((game) =>
    game.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
  );

  return (
    <div className="bg-background min-h-dvh">
      <Header />
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="mx-auto w-full max-w-7xl px-4 py-8">
        <GameSection title="Popular Games" games={filteredGames} />
      </main>
    </div>
  );
};
export default App;
