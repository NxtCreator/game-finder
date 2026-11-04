import { Star } from "lucide-react";

const Card = ({ title, thumbnail, genre, year }) => {
  return (
    <div className="bg-card text-foreground rounded-lg p-4 flex flex-col">
      <img
        src={thumbnail}
        alt="Game Cover"
        className="w-full object-cover rounded-lg"
      />
      <h2 className="text-md font-semibold mt-4 truncate">{title}</h2>

      <div className="flex items-center mt-2">
        <p className="text-muted-foreground flex items-center gap-1.5">
          <span className="font-semibold text-foreground">{genre}</span>

          <span>•</span>

          {year}
        </p>
      </div>
    </div>
  );
};
export default Card;
