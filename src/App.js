import Scene from "./components/scene/scene/Scene";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./styles/global.scss";

function App() {
  return (
    <div className="app">
      <Scene />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
