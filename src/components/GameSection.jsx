import { Ghost } from "lucide-react";
import Card from "./Card.jsx";
import Card2 from "./Card2.jsx";

const GameSection = ({ title, games }) => {
  return (
    <div>
      <h2 className="text-foreground text-2xl font-display mb-4">{title}</h2>
      {games.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 py-8">
          <Ghost className="w-12 h-12 text-accent" />
          <p className="text-foreground text-lg font-display">
            No souls found.
          </p>
          <p className="text-muted-foreground text-sm font-body">
            Try a different spell
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {games.map((game) => (
            <Card
              key={game.id}
              title={game.title}
              thumbnail={game.thumbnail}
              id={game.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default GameSection;
