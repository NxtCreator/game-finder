import { Ghost } from "lucide-react"
import Card from "./components/Card"
import GAMES from "./data/data.js"

const App = () => {
  return (
    <div className="bg-background min-h-dvh flex items-center justify-center p-6">
      <div className="grid-cols-4 gap-4 grid">
        {GAMES.map(game => (
          <Card key={game.id} title={game.title} />
        ))}
      </div>
    </div>
  )
}
export default App