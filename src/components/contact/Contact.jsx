import "./Contact.scss";
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";
import email from "../../assets/images/email.png";

const Contact = () => {
  return (
    <div className="contact">
      <h3 className="contact__header">Contact</h3>
      <div className="contact__container">
        <a href="mailto:thomaswilliamdaley@gmail.com" target="_blank">
          <img src={email} alt="Email contact" />
        </a>
        <a
          href="https://www.linkedin.com/in/thomas-william-daley"
          target="_blank"
        >
          <img src={Linkedin} alt="Linkedin contact" />
        </a>
        <a href="https://github.com/TD142" target="_blank">
          <img src={Github} alt="Github contact" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
