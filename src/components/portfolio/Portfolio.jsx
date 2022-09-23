import "./Portfolio.scss";
import FadeInSection from "../fade-in/FadeIn";
import OMEGA from "../../assets/images/wave-animation.png";
import Brainflix from "../../assets/images/brainflix.png";
import thoughtBank from "../../assets/images/thought-bank.png";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <FadeInSection>
        <p className="portfolio__text">
          Take a look at selected pieces from my portfolio
        </p>
        <div className="portfolio__container">
          <div className="portfolio__outer-container">
            <div className="portfolio__inner-container">
              <a
                href="https://github.com/TD142/thomas-daley-capstone-client"
                target="_blank"
              >
                <img
                  className="portfolio__inner-container__image"
                  src={OMEGA}
                  alt="OMEGA"
                />
                <div className="portfolio__wrapper">
                  <p className=" portfolio__wrapper__text portfolio__wrapper__text--underline">
                    OMEGA
                  </p>
                  <p className="portfolio__wrapper__text portfolio__wrapper__text--description">
                    Audio visualiser exploring chance music. <br />
                    React | Node.js | Three.js
                  </p>
                </div>
              </a>
            </div>
            <div className="portfolio__inner-container portfolio__inner-container--overlay  ">
              <a
                href="https://github.com/TD142/thomas-daley-brainflix"
                target="_blank"
              >
                <img
                  className="portfolio__inner-container__image"
                  src={Brainflix}
                  alt="Brainflix"
                />
                <div className="portfolio__wrapper">
                  <p className=" portfolio__wrapper__text portfolio__wrapper__text--underline">
                    Brainflix
                  </p>
                  <p className="portfolio__wrapper__text portfolio__wrapper__text--description ">
                    Video streaming platform. <br />
                    React | Node.js |
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="portfolio__inner-container portfolio__inner-container--centre">
            <a
              href="https://github.com/TD142/thomas-daley-bandsite"
              target="_blank"
            >
              <img
                className="portfolio__inner-container__image"
                src={thoughtBank}
                alt="thoughtbank"
              />
              <div className="portfolio__wrapper portfolio__wrapper--colour">
                <p className=" portfolio__wrapper__text  portfolio__wrapper__text--wide-underline">
                  Thought Bank
                </p>
                <p className="portfolio__wrapper__text portfolio__wrapper__text--description ">
                  MERN Art Blog. <br />
                  React | Node.js | Three.js
                </p>
              </div>
            </a>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Portfolio;
