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
            <a
              href="mailto:thomaswilliamdaley@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p>Email</p>
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-william-daley"
              target="_blank"
              rel="noreferrer"
            >
              <p>Linkedin</p>
            </a>
            <a
              href="https://github.com/TD142"
              target="_blank"
              rel="noreferrer"
            >
              <p>Github</p>
            </a>
            <a
              href="/Thomas_Daley_CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <p>CV</p>
            </a>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Contact;
