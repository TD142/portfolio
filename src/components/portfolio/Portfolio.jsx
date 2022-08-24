import "./Portfolio.scss";
import FadeInSection from "../fade-in/FadeIn";
import OMEGA from "../../assets/images/wave-animation.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <FadeInSection>
        <h3 className="portfolio__title">Portfolio</h3>
        <div className="portfolio__container">
          <div className="portfolio__inner-container">
            {/* <p>Audio visualiser with music written by myself</p> */}
            <img
              className="portfolio__inner-container__image"
              src={OMEGA}
              alt=""
            />
            <div className="portfolio__wrapper">
              <p className=" portfolio__wrapper__text portfolio__wrapper__text--underline">
                OMEGA
              </p>
              <p className="portfolio__wrapper__text portfolio__wrapper__text--description">
                Audio visualiser exploring chance music
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Portfolio;
