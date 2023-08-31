import Logo from "../../Components/Logo/Logo";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-contnet">
          <div className="box height">
            <Logo />
            <ul>
              <li>Flexpicss Movies</li>
              <li>M.P. India</li>
              <li>Call: +91 999-3444-568</li>
            </ul>
          </div>
          <div className="box">
            <ul>
              <li>
                <h3>Resources</h3>
              </li>
              <li>About Flexpicss</li>
              <li>
                <Link to="/contact">Contact US</Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <ul>
              <li>
                <h3>Legal</h3>
              </li>
              <li>Term of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <ul>
              <li>
                <h3>Newsletter</h3>
              </li>
            </ul>
            <p>
              Subscribe to our newsletter system now to get latest news from us
            </p>
            <input type="string" disabled />
            <h5>Subscribe Now</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
