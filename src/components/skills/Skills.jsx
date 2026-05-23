import { useEffect, useRef, useState } from "react";
import "./Skills.scss";
import React from "../../assets/images/react.svg";
import Typescript from "../../assets/images/typescript.svg";
import Dotnet from "../../assets/images/dotnet.svg";
import Postgres from "../../assets/images/postgresql.svg";
import Angular from "../../assets/images/angular.svg";
import Tailwind from "../../assets/images/tailwind.svg";
import CSS from "../../assets/images/css.svg";
import Storybook from "../../assets/images/storybook.svg";
import Node from "../../assets/images/nodejs.svg";
import Git from "../../assets/images/git.svg";
import AWS from "../../assets/images/aws.svg";
import Jest from "../../assets/images/jest.svg";
import Vitest from "../../assets/images/vitest.svg";
import Three from "../../assets/images/Threejs-logo.svg";

const skills = [
  { src: React, label: "React" },
  { src: Typescript, label: "TypeScript" },
  { src: Dotnet, label: "ASP.NET Core" },
  { src: Postgres, label: "PostgreSQL" },
  { src: Angular, label: "Angular" },
  { src: Tailwind, label: "Tailwind" },
  { src: CSS, label: "CSS" },
  { src: Storybook, label: "Storybook" },
  { src: Node, label: "Node.js" },
  { src: Git, label: "Git" },
  { src: AWS, label: "AWS" },
  { src: Jest, label: "Jest" },
  { src: Vitest, label: "Vitest" },
  { src: Three, label: "Three.js" },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setVisible(true));
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills" ref={ref}>
      <div className="skills__container">
        <h4 className="skills__header">Skills</h4>
        <div className={`skills__grid ${visible ? "is-visible" : ""}`}>
          {skills.map(({ src, label }, i) => (
            <div className="skill-tile" key={label} style={{ "--i": i }}>
              <img className="skill-tile__image" src={src} alt={label} />
              <h4>{label}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
