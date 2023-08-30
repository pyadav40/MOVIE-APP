import "./logo.scss";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <>
      <Link to="/">
        <div className="footer-logo">
          <div className="letter">
            <h1>F</h1>
          </div>
          <h3>Flexpicss</h3>
        </div>
      </Link>
    </>
  );
};

export default Logo;
