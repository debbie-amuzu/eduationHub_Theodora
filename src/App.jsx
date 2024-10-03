import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Navbar from "./components/Navbar"; default import
// // import {Navbar} from "./components/Navbar"; as name
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About.";
import Footer from "./components/Footer";
import Offers from "./components/offers";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Footer />
      <Offers />
    </div>
  );
}

export default App;
