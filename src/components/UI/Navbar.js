import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="nav">
      <div className="container nav-wrapper">
        <ul className={`navbar-links ${toggle && "show-toggle"}`} onClick={()=>setToggle(false)}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="about-me">about me</Link>
          </li>
          <li>
            <Link to="about-app">about app</Link>
          </li>
          <li>
            <a href="https://github.com/" target="_blank"  rel="noreferrer">
              github
            </a>
          </li>
        </ul>
        <i
          className={`toggle-icon ${toggle ? "fa fa-close" : "fa fa-bars"}`}
          onClick={() => setToggle(!toggle)}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
