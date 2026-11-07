import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchGameById } from "../data/fetchData";
import { ExternalLink } from "lucide-react";
import GameDetailSkeleton from "./GameDetailSkeleton";

const GameDetail = () => {
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const requirementLabels = {
    graphics: "Graphics",
    memory: "Memory",
    os: "Operating System",
    processor: "Processor",
    storage: "Storage",
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setGame(null);

    fetchGameById(id)
      .then((fetchedGame) => {
        setGame(fetchedGame);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <GameDetailSkeleton />;
  }

  if (error) {
    return <p>Something went wrog while loading details</p>;
  }

  if (!game) {
    return <p>Game not found.</p>;
  }

  const requirements = game.minimum_system_requirements;
  const hasRequirements =
    requirements && Object.values(requirements).some(Boolean);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-[43%_1fr] gap-6">
        <div className="bg-card rounded-lg overflow-hidden aspect-video flex items-center justify-center">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-2">
            <span className="rounded-xl px-3 py-2 text-sm bg-accent/15 text-accent">
              {game.status}
            </span>

            <span className="rounded-xl px-3 py-2 text-sm bg-accent/15 text-accent">
              {game.genre}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">{game.title}</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {game.short_description}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {game.platform}
            </span>
            <span className="text-sm text-muted-foreground">
              {game.release_date}
            </span>
          </div>
          <a
            href={game.game_url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 
              text-sm font-semibold text-foreground hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={16} /> Play Now
          </a>
        </div>
      </div>

      <section className="flex flex-col gap-3 mt-6">
        <h2 className="font-body text-2xl text-foreground">About This Game</h2>
        <p className="text-sm font-body text-muted-foreground leading-relaxed">
          {game.description}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-body text-foreground mb-4 mt-6">
          System Requirements
        </h2>

        {hasRequirements ? (
          <div className="flex flex-col gap-3 border-t border-border pt-4">
            <h3 className="font-semibold text-foreground">Minimum Specs</h3>

            {Object.entries(requirements)
              .filter(([, value]) => Boolean(value))
              .map(([key, value]) => (
                <p
                  key={key}
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="font-semibold text-foreground">
                    {requirementLabels[key]}:
                  </span>{" "}
                  {value}
                </p>
              ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            System requirements are not available for this game
          </p>
        )}
      </section>
    </main>
  );
};
export default GameDetail;
