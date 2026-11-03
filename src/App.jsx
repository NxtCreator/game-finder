import { useState } from "react"
import GameSection from "./components/GameSection.jsx"
import Header from "./components/Header.jsx"
import GAMES from "./data/data.js"
import { Search } from "lucide-react"
import SearchBar from "./components/SearchBar.jsx"

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredGames = GAMES.filter(game => (
    game.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  ))

  return (
    <div className="bg-background min-h-dvh">
      <Header />
      <div className="mx-auto w-full max-w-xl px-4 py-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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