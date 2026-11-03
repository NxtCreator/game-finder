import { useState } from "react"
import GameSection from "./components/GameSection.jsx"
import Header from "./components/Header.jsx"
import GAMES from "./data/data.js"

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredGames = GAMES.filter(game => (
    game.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  ))

  return (
    <div className="bg-background min-h-dvh">
      <Header />
      <div className="px-4 py-8">
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-input text-foreground border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>
      <p className="text-center text-muted-foreground">
        {searchTerm ? `Searching for "${searchTerm}"...` : "Browse our collection of popular games!"}
      </p>
      <main className="mx-auto w-full max-w-7xl px-4 py-8">
        <GameSection title="Popular Games" games={filteredGames} />
      </main>
    </div>
  )
}
export default App