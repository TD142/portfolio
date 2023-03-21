import "./Skills.scss";
import FadeInSection from "../fade-in/FadeIn";
import Marquee from "react-fast-marquee";
import HTML from "../../assets/images/html.svg";
import CSS from "../../assets/images/css.svg";
import Javascript from "../../assets/images/javascript.png";
import React from "../../assets/images/react.svg";
import Node from "../../assets/images/nodejs.svg";
import Git from "../../assets/images/git.svg";
import Three from "../../assets/images/Threejs-logo.svg";
import Typescript from "../../assets/images/typescript.svg";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__container">
        <h4 className="skills__header">Skills</h4>
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
            <img className="marquee__image" src={Javascript} alt="Javascript" />
            <h4>Javascript</h4>
          </div>
          <div className="marquee__container">
            <img className="marquee__image" src={Typescript} alt="Typescript" />
            <h4>Typescript</h4>
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
  );
};

export default Skills;
