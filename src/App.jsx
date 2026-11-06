import { useState, useEffect } from "react";
import GameSection from "./components/GameSection.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { fetchData } from "./data/fetchData.js";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";

const App = () => {
  return (
    <div className="bg-background min-h-dvh">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};
export default App;
