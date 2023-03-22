import "./Portfolio.scss";
import OMEGA from "../../assets/images/wave-animation.png";
import Brainflix from "../../assets/images/brainflix.png";
import Bookmarks from "../../assets/images/Bookmarks.png";
import changeItem from "../../assets/images/pngkey.com-stylish-arrow-png-8304891.svg";
import Goose from "../../assets/images/canada-goose.jpeg";
import { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const Portfolio = () => {
  const intervalRef = useRef();
  let index = 0;

  const nextItem = () => {
    const items = document.querySelectorAll(".carousel__item");
    const indicators = document.querySelectorAll(".indicator");

    index++;
    let currentIndex = ((index % items.length) + items.length) % items.length;

    indicators.forEach((indicator) => {
      indicator.classList.remove("indicator--active");
    });
    indicators[currentIndex].classList.add("indicator--active");

    if (currentIndex === 0) {
      items[items.length - 1].classList.remove("carousel__item--fade");
      items[items.length - 1].classList.add("carousel__item--hidden");

      items[0].classList.remove("carousel__item--hidden");
      items[0].classList.add("carousel__item--fade");

      return;
    }

    items[currentIndex].classList.remove("carousel__item--hidden");
    items[currentIndex].classList.add("carousel__item--fade");

    items[currentIndex - 1].classList.remove("carousel__item--fade");
    items[currentIndex - 1].classList.add("carousel__item--hidden");
  };

  const previousItem = () => {
    const items = document.querySelectorAll(".carousel__item");
    const indicators = document.querySelectorAll(".indicator");
    index--;
    let currentIndex = ((index % items.length) + items.length) % items.length;

    indicators.forEach((indicator) => {
      indicator.classList.remove("indicator--active");
    });
    indicators[currentIndex].classList.add("indicator--active");

    if (currentIndex === items.length - 1) {
      items[0].classList.remove("carousel__item--fade");
      items[0].classList.add("carousel__item--hidden");
      items[items.length - 1].classList.remove("carousel__item--hidden");
      items[items.length - 1].classList.add("carousel__item--fade");

      return;
    }
    items[currentIndex].classList.remove("carousel__item--hidden");
    items[currentIndex].classList.add("carousel__item--fade");
    items[currentIndex + 1].classList.remove("carousel__item--fade");
    items[currentIndex + 1].classList.add("carousel__item--hidden");
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      nextItem();
    },

    onSwipedRight: () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      previousItem();
    },
  });

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextItem();
    }, 6000);
    return () => {
      clearInterval(intervalRef.current);
    };
  });
  return (
    <div className="portfolio">
      <h4 className="portfolio__header">Portfolio</h4>
      <div className="container">
        <img
          className="container__previous"
          src={changeItem}
          alt="carousel previous"
          id="previous"
          onClick={() => {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            previousItem();
          }}
        />
        <div {...handlers} className="carousel">
          <div className="carousel__item">
            <img src={OMEGA} alt="Omega main" />
            <p>
              An audio visualiser built in React utilising Three.js and the Web
              Audio Api. The visuals react to the triggered clips, and these can
              be combined in an infinite number of different ways.
            </p>
            <div className="carousel__item__links">
              <a
                href="https://github.com/TD142/thomas-daley-capstone-client"
                target="_blank"
              >
                <p>Code</p>
              </a>
              <a href="https://prayer-omega.vercel.app/" target="_blank">
                <p>Site</p>
              </a>
            </div>
          </div>
          <div className="carousel__item carousel__item--hidden">
            <img src={Brainflix} alt="Brainflix Main" />
            <p>
              Full stack Streaming style website built in React and Express as
              part of my web development diploma. Showcases API build and
              integration.
            </p>

            <div className="carousel__item__links">
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
          <div className="carousel__item carousel__item--hidden">
            <img src={Bookmarks} alt="Bookmarks screenshot" />
            <p>
              CRUD Bookmark app made with React And Typescript. The App
              authenticates whether a URL is valid / exists, and features
              add/edit/delete functionality, as well as data persistance
              utilising local storage.
            </p>
            <div className="carousel__item__links">
              <a href="https://github.com/TD142/Bookmarks" target="_blank">
                <p>Code</p>
              </a>

              <a href="https://bookmarks-td.vercel.app" target="_blank">
                <p>Site</p>
              </a>
            </div>
          </div>
          <div className="carousel__item carousel__item--hidden">
            <img src={Goose} alt="Canada Goose website" />
            <p>
              Part of the winning team for a 24hr Hackathon challenge set by
              Canada Goose during my web development program. The aim was to
              highlight The company's drive to increase sustainability, which we
              did by offering a rental model of their existing lines. The team
              consisted of two developers and two UX designers.
            </p>
            <div className="carousel__item__links">
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

          <div className="carousel__item carousel__item--hidden">
            <img
              src="https://static.dezeen.com/uploads/2020/03/chinese-brutalism-today-alberto-bologna-china-architecture-concrete_dezeen_1704_taizhou_hero-852x479.jpg"
              alt="Thoughtbank"
            />
            <p>
              A MERN stack art blog in which the user can login and post blogs.
              Showcases form validation, API build/integration, a custom
              animated nav, as well as a custom carousel which you are viewing
              now.
            </p>
            <div className="carousel__item__links">
              <a
                href="https://github.com/TD142/thought-bank-client"
                target="_blank"
              >
                <p>Code</p>
              </a>
            </div>
          </div>
        </div>
        <img
          className="container__next"
          src={changeItem}
          alt="carousel next"
          id={"next"}
          onClick={() => {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            nextItem();
          }}
        />
      </div>
      <div className="indicator__container">
        <div className="indicator indicator--active"></div>
        <div className="indicator"></div>
        <div className="indicator"></div>
        <div className="indicator"></div>
        <div className="indicator"></div>
      </div>
    </div>
  );
};

export default Portfolio;
