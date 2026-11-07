import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import { Routes, Route } from "react-router";
import GameDetail from "./components/GameDetail.jsx";

const App = () => {
  return (
    <div className="bg-background min-h-dvh flex flex-col">
      <Header />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<GameDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
export default App;
