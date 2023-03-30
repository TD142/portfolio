import OMEGA from "../../assets/images/wave-animation.png";
import Brainflix from "../../assets/images/brainflix.png";
import Bookmarks from "../../assets/images/Bookmarks.png";
import changeItem from "../../assets/images/pngkey.com-stylish-arrow-png-8304891.svg";
import Goose from "../../assets/images/canada-goose.jpeg";
import FadeInSection from "../fade-in/FadeIn";

const PortfolioGoose = () => {
  return (
    <FadeInSection>
      <div className="portfolio">
        <div className="container">
          <h4 className="portfolio__header"></h4>
          <div className="wrapper">
            <div className="wrapper__item ">
              <h4>Canada Goose</h4>
              <img src={Goose} alt="Canada Goose website" />
              <div>
                <p>
                  Part of the winning team for a 24hr Hackathon challenge set by
                  Canada Goose during my web development program. The aim was to
                  highlight The company's drive to increase sustainability,
                  which we did by offering a rental model of their existing
                  lines. The team consisted of two developers and two UX
                  designers.
                </p>
                <div className="wrapper__item__links">
                  <a
                    href="https://github.com/James-Bosley/canada-goose-client"
                    target="_blank"
                  >
                    <p>Code</p>
                  </a>

                  <a href="https://sustainable-goose.surge.sh/" target="_blank">
                    <p>Site</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default PortfolioGoose;
