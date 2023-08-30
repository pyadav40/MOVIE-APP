import "./contact.scss";
import contactImg from "../../assets/contactImg.png";
import { FaPhone, FaAt, FaGithub, FaLinkedin } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box white">
        <img src={contactImg} />
      </div>
      <div className="contact-box purple uneven">
        <div className="contact-details">
          <div className="contact-heading">
            <h1>Contact US</h1>
          </div>
          <div className="contact-source">
            <div className="source-first">
              <div className="ico-contact col-blue">
                <FaPhone />
              </div>
              <span>+91 999-3444-568</span>
            </div>
            <div className="source-second">
              <div className="ico-contact col-green">
                <FaAt />
              </div>
              <span>piyushyadav@live.com</span>
            </div>
          </div>
          <div className="contact-source">
            <div className="source-second">
              <div className="ico-contact col-white">
                <FaGithub />
              </div>
              <span>
                <a href="https://github.com/pyadav40">Github Account</a>
              </span>
            </div>
            <div className="source-second">
              <div className="ico-contact col-blue">
                <FaLinkedin />
              </div>
              <span>
                <a href="www.linkedin.com/in/piyushyadav40">Linked In</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
