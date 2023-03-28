import "./Contact.scss";
import contactImage from "../../assets/images/thomas_daley.jpg";
import FadeInSection from "../fade-in/FadeIn";

const Contact = () => {
  return (
    <FadeInSection>
      <div className="contact">
        <img src={contactImage} alt="contact logo" />
        <div className="contact__outer__container">
          <h4 className="contact__header">Contact</h4>
          <div className="contact__container">
            <a href="mailto:thomaswilliamdaley@gmail.com" target="_blank">
              <p>Email</p>
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-william-daley"
              target="_blank"
            >
              <p>Linkedin</p>
            </a>
            <a href="https://github.com/TD142" target="_blank">
              <p>Github</p>
            </a>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Contact;
