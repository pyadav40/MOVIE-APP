import { useState } from "react";
import "./navbar.scss";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="container">
      <div className="logo">
        <div className="hamberger">
          <FiMenu
            onClick={() => {
              setDrawer(true);
            }}
          />
          <div className="hide-logo">
            <Logo />
          </div>
        </div>
        <div className="search">
          <div className="search-container">
            <Link to="/search">
              <IoSearch className="search-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className={`${drawer ? "menu" : "menu-inv"}`}>
        <div
          onClick={() => {
            setDrawer(false);
          }}
          className="close"
        >
          <IoCloseSharp className="cl-icon" />
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movie/1">Movies</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
