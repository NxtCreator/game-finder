const GameGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="aspect-video rounded-lg 
        bg-muted-foreground/10 animate-pulse"
        />
      ))}
    </div>
  );
};
export default GameGridSkeleton;
