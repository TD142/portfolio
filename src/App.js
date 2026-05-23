import Scene from "./components/scene/scene/Scene";
import About from "./components/about/About";
import PortfolioOmega from "./components/portfolio-omega/PortfolioOmega";
import Contact from "./components/contact/Contact";
import "./styles/global.scss";

function App() {
  return (
    <div className="app">
      <Scene />
      <About />
      <PortfolioOmega />
      <Contact />
    </div>
  );
}

export default App;
