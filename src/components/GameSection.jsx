import GAMES from "../data/data.js"
import Card from "./Card.jsx"

const GameSection = () => {
  return (
    <div className="grid-cols-4 gap-4 grid">
        {GAMES.map(game => (
          <Card 
            key={game.id} 
            title={game.title} 
            rating={game.rating} 
            year={game.year} 
          />
        ))}
    </div>
  )
}
export default GameSection