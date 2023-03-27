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
            Hi my name's Thomas, and I am a creative developer with a background
            in music.
          </p>
          <p className="about__text">
            My love and journey into web development started from my passion for
            music - both fields use a complex source (music notation / code) to
            present beautiful outputs, whether visually or audibly.
          </p>
          <p className="about__text">
            I believe it is my creativity which sets me apart in this field as
            my whole life I have looked for new ways of doing things, whether
            it’s through music, logical thinking or coding.
          </p>
        </div>

        <Skills />
      </div>
    </FadeInSection>
  );
};

export default About;
