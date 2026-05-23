import Skills from "../skills/Skills";
import "./About.scss";
import FadeInSection from "../fade-in/FadeIn";

const About = () => {
  return (
    <FadeInSection>
      <div className="about">
        <div className="about__container">
          <h4>About</h4>
          <p className="about__text">
            Frontend-leaning full-stack engineer with 4+ years building
            production apps in React, Angular, and .NET. I care about scalable
            UI systems, clean APIs, and shipping features end-to-end.
          </p>
          <p className="about__text">
            My background in music shaped how I work — both fields take a
            structured source (notation, code) and turn it into something
            people experience. That creative thread still runs through what I
            build.
          </p>
        </div>

        <Skills />
      </div>
    </FadeInSection>
  );
};

export default About;
