import OMEGA from "../../assets/images/wave-animation.png";
import Bookmarks from "../../assets/images/Bookmarks.png";
import FadeInSection from "../fade-in/FadeIn";

const PortfolioBookmarks = () => {
  return (
    <FadeInSection>
      <div className="portfolio">
        <div className="container">
          <div className="wrapper">
            <div className="wrapper__item wrapper__item--hidden">
              <img src={Bookmarks} alt="Bookmarks screenshot" />
              <p>
                CRUD Bookmark app made with React And Typescript. The App
                authenticates whether a URL is valid / exists, and features
                add/edit/delete functionality, as well as data persistance
                utilising local storage.
              </p>
              <div className="wrapper__item__links">
                <a href="https://github.com/TD142/Bookmarks" target="_blank">
                  <p>Code</p>
                </a>

                <a href="https://bookmarks-td.vercel.app" target="_blank">
                  <p>Site</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default PortfolioBookmarks;
