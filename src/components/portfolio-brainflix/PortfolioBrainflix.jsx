import OMEGA from "../../assets/images/wave-animation.png";
import Brainflix from "../../assets/images/brainflix.png";
import Bookmarks from "../../assets/images/Bookmarks.png";
import changeItem from "../../assets/images/pngkey.com-stylish-arrow-png-8304891.svg";
import Goose from "../../assets/images/canada-goose.jpeg";
import { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import FadeInSection from "../fade-in/FadeIn";

const PortfolioSection = () => {
  return (
    <FadeInSection>
      <div className="portfolio">
        <div className="container">
          <h4 className="portfolio__header"></h4>
          <div className="wrapper">
            <div className="wrapper__item ">
              <h4>Brainflix</h4>
              <img src={Brainflix} alt="Brainflix Main" />
              <div>
                <p>
                  Full stack Streaming style website built in React and Express
                  as part of my web development diploma. Showcases API build and
                  integration.
                </p>

                <div className="wrapper__item__links">
                  <a
                    href="https://github.com/TD142/thomas-daley-brainflix"
                    target="_blank"
                  >
                    <p>Code</p>
                  </a>
                  <a href="https://brainflix-eight.vercel.app/" target="_blank">
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

export default PortfolioSection;
