import Scene from "./components/scene/scene/Scene";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./styles/global.scss";
import { Suspense, useEffect, useState } from "react";

function App() {
  return (
    <div className="app">
      <Scene />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
