import "./Contact.scss";
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";
import email from "../../assets/images/email.png";

const Contact = () => {
  return (
    <div className="contact">
      <h3 className="contact__header">Contact</h3>
      <div className="contact__container">
        <img src={email} alt="Email contact" />
        <img src={Linkedin} alt="Linkedin contact" />
        <img src={Github} alt="Github contact" />
      </div>
    </div>
  );
};

export default Contact;
