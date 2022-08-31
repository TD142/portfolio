import "./Skills.scss";
import FadeInSection from "../fade-in/FadeIn";
import Marquee from "react-fast-marquee";
import HTML from "../../assets/images/html.svg";
import CSS from "../../assets/images/css.svg";
import Javascript from "../../assets/images/javascript.svg";
import React from "../../assets/images/react.svg";
import Node from "../../assets/images/nodejs.svg";
import Git from "../../assets/images/git.svg";
import Three from "../../assets/images/Threejs-logo.svg";

const Skills = () => {
  return (
    <div className="skills">
      <FadeInSection>
        <div className="skills__outer-container">
          <p className="skills__text">
            I have a diverse skill set and can work on a variety of projects
          </p>
          <div className="skills__container">
            <Marquee speed={40} gradient={false}>
              <div className="marquee__container">
                <img className="marquee__image" src={HTML} alt="HTML" />
                <h4>HTML</h4>
              </div>
              <div className="marquee__container">
                <img className="marquee__image" src={CSS} alt="CSS" />
                <h4>CSS</h4>
              </div>
              <div className="marquee__container">
                <img
                  className="marquee__image"
                  src={Javascript}
                  alt="Javascript"
                />
                <h4>Javascript</h4>
              </div>
              <div className="marquee__container">
                <img className="marquee__image" src={React} alt="React" />
                <h4>React</h4>
              </div>
              <div className="marquee__container">
                <img className="marquee__image" src={Node} alt="Node" />
                <h4>Node.js</h4>
              </div>
              <div className="marquee__container">
                <img className="marquee__image" src={Git} alt="Git" />
                <h4>Git</h4>
              </div>

              <div className="marquee__container">
                <img className="marquee__image" src={Three} alt="Three.js" />
                <h4>Three.js</h4>
              </div>
            </Marquee>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Skills;
