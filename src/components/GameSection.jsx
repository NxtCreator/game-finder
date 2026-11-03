import Card from "./Card.jsx"

const GameSection = ({ title, games }) => {
  return (
    <div className="">
      <h1 className="text-foreground text-2xl font-body font-bold mb-4">{title}</h1>
      <div className="grid-cols-4 gap-4 grid">
        {games.map(game => (
          <Card 
            key={game.id} 
            title={game.title} 
            rating={game.rating} 
            year={game.year} 
          />
        ))}
    </div>
    </div>
  )
}
export default GameSection