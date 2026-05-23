import OMEGA from "../../assets/images/wave-animation.png";
import FadeInSection from "../fade-in/FadeIn";

const PortfolioOmega = () => {
  return (
    <FadeInSection>
      <div className="portfolio">
        <h4 className="portfolio__header">Portfolio</h4>
        <div className="container">
          <div className="wrapper">
            <div className="wrapper__item">
              <img
                className="wrapper__item__img"
                src={OMEGA}
                alt="Omega main"
              />
              <div>
                <p>
                  An audio visualiser built in React utilising Three.js and the
                  Web Audio Api. The visuals react to the triggered clips, and
                  these can be combined in an infinite number of different ways.
                </p>
                <div className="wrapper__item__links">
                  <a
                    href="https://github.com/TD142/thomas-daley-capstone-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>Code</p>
                  </a>
                  <a
                    href="https://prayer-omega.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
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

export default PortfolioOmega;
