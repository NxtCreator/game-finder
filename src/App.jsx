import { useState, useEffect } from "react";
import GameSection from "./components/GameSection.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { fetchData } from "./data/fetchData.js";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then((fetchedData) => {
        setData(fetchedData);
        console.log("Fetched data:", fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(loading);

  const filteredGames = data.filter((game) =>
    game.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
  );

  return (
    <div className="bg-background min-h-dvh">
      <Header />
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="mx-auto w-full max-w-7xl px-4 py-8">
        {error ? (
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <p className="text-foreground text-lg font-display">
              Error fetching data.
            </p>
            <p className="text-muted-foreground text-sm font-body">
              Please try again later.
            </p>
          </div>
        ) : loading ? (
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <p className="text-foreground text-lg font-display">Loading...</p>
          </div>
        ) : (
          <GameSection title="All Games" games={filteredGames} />
        )}
      </main>
    </div>
  );
};
export default App;
