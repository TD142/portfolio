import Scene from "./components/scene/scene/Scene";
import About from "./components/about/About";
import PortfolioOmega from "./components/portfolio-omega/PortfolioOmega";
import PortfolioBrainflix from "./components/portfolio-brainflix/PortfolioBrainflix";
import PortfolioBookmarks from "./components/portfolio-bookmarks/PortfolioBookmarks";
import PortfolioGoose from "./components/portfolio-goose /PortfolioGoose";
import PortfolioThoughtbank from "./components/portfolio-thoughtbank/PortfolioThoughtbank";
import Contact from "./components/contact/Contact";
import "./styles/global.scss";

function App() {
  console.log("test");
  return (
    <div className="app">
      <Scene />
      <About />
      <PortfolioOmega />
      <PortfolioBrainflix />
      <PortfolioBookmarks />
      <PortfolioGoose />
      <PortfolioThoughtbank />
      <Contact />
    </div>
  );
}

export default App;
