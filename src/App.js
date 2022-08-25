import Scene from "./components/scene/scene/Scene";
import Skills from "./components/skills/Skills";
import "./styles/global.scss";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Scene />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
