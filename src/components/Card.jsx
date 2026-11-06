import { Link } from "react-router";

const Card = ({ title, thumbnail, id }) => {
  return (
    <Link
      to={`/game/${id}`}
      className="bg-card text-foreground rounded-lg overflow-hidden relative group aspect-video outline-none focus-visible:ring-2 focus-visible:ring-glow transition-colors"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover group-hover:blur-sm group-focus-within:blur-sm transition-all duration-300"
      />
      <div className="flex items-center justify-center absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 bg-background/50 flex-col p-4">
        <h2 className="text-foreground text-lg font-body font-bold mb-1">
          {title}
        </h2>
      </div>
    </Link>
  );
};
export default Card;
