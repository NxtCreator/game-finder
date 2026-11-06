import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import { Routes, Route } from "react-router";
import GameDetail from "./components/GameDetail.jsx";

const App = () => {
  return (
    <div className="bg-background min-h-dvh">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
