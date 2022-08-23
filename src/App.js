import Scene from "./components/scene/scene/Scene";
import Skills from "./components/skills/Skills";
import "./styles/global.scss";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Scene />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
