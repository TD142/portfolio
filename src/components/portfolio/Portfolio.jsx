import "./Portfolio.scss";
import OMEGA from "../../assets/images/wave-animation.png";
import Brainflix from "../../assets/images/brainflix.png";
import changeItem from "../../assets/images/pngkey.com-stylish-arrow-png-8304891.svg";
import { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const Portfolio = () => {
  // carousel

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
        // intervalRef.current = setInterval(() => {
        //   nextItem();
        // }, 6000);
      }
      nextItem();
    },

    onSwipedRight: () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        // intervalRef.current = setInterval(() => {
        //   nextItem();
        // }, 6000);
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
      {/* <h5 className="portfolio__header">Portfolio</h5> */}
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
            <a href="https://github.com/TD142/thought-bank-client">
              <p>Github</p>
            </a>
          </div>
          <div className="carousel__item carousel__item--hidden">
            <img src={OMEGA} alt="Omega main" />
            <p>
              An audio visualiser built in React utilising Three.js and the Web
              Audio Api. The visuals react to the triggered clips, and these can
              be combined in an infinite number of different ways.
            </p>
            <a href="https://github.com/TD142/thomas-daley-capstone-client">
              <p>Github</p>
            </a>
          </div>
          <div className="carousel__item carousel__item--hidden">
            <img src={Brainflix} alt="Brainflix Main" />
            <p>
              Full stack Streaming style website built in React and Express as
              part of my web development diploma. Showcases API build and
              integration.
            </p>
            <a href="https://github.com/TD142/thomas-daley-brainflix">
              <p>Github</p>
            </a>
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
        <div className="indicator"></div>
        <div className="indicator"></div>
        <div className="indicator"></div>
      </div>
    </div>
  );
};

export default Portfolio;
