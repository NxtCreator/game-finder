import GameSection from "./components/GameSection.jsx"
import Header from "./components/Header.jsx"
import GAMES from "./data/data.js"

const App = () => {
  return (
    <div className="bg-background min-h-dvh">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 py-8">
        <GameSection title="Popular Games" games={GAMES} />
      </main>
    </div>
  )
}
export default App