import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/lion.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <nav>
        <div className="logoContainer">
          <Link className="logo " to="/">
            <img src={logo} alt="logo" className="logoImg" />
            <h2>
              <span>R</span>eact
              <span>A</span>pp
            </h2>
          </Link>
        </div>

        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>

        <div id="mobile" onClick={() => setClicked(!clicked)}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
