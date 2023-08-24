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
          <Logo />
        </div>
        <div className="search">
          <div className="search-container">
            <IoSearch className="search-icon" />
            <input type="text" placeholder="search" />
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
            <Link to="/movie">Movies</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
