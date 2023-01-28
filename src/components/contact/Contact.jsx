import "./Contact.scss";
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";
import email from "../../assets/images/email.png";
import OceanAnimation from "../ocean-animation/OceanAnimation";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import contactImage from "../../assets/images/beneath.jpeg";

const Contact = () => {
  return (
    <div className="contact">
      <img src={contactImage} alt="contact logo" />
      <h5 className="contact__header">Contact</h5>

      <div className="contact__container">
        <a href="mailto:thomaswilliamdaley@gmail.com" target="_blank">
          {/* <img src={email} alt="Email contact" /> */}
          <p>Email</p>
        </a>
        <a
          href="https://www.linkedin.com/in/thomas-william-daley"
          target="_blank"
        >
          {/* <img src={Linkedin} alt="Linkedin contact" /> */}
          <p>Linkedin</p>
        </a>
        <a href="https://github.com/TD142" target="_blank">
          {/* <img src={Github} alt="Github contact" /> */}
          <p>Github</p>
        </a>
      </div>
      <div className="contact__secondary-container">
        {/* <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 10, 2]} intensity={0.5} />
          <OceanAnimation />
        </Canvas> */}
      </div>
    </div>
  );
};

export default Contact;
