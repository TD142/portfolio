import FadeInSection from "../fade-in/FadeIn";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import AboutAnimation from "../about-animation/AboutAnimation";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <FadeInSection>
        <div className="about__container">
          <p className="about__text">
            Hi my name's Thomas, and I am a creative developer with a background
            in music. My love and journey into web development started from my
            passion for music - both fields use a complex source (music notation
            / code) to present beautiful outputs, whether visually or audibly. I
            believe it is my creativity which sets me apart in this field as my
            whole life I have looked for new ways of doing things, whether it’s
            through music, logical thinking or coding.
          </p>

          <div className="about__animation">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 10, 2]} intensity={0.5} />
              <AboutAnimation />
            </Canvas>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
