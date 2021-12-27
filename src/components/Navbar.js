import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={classes.header}
      style={{
        backgroundColor: color ? "rgba(0, 0, 0, 0.2)" : "transparent",
        transition: "0.4s linear",
      }}
    >
      <div className={classes.container}>
        <Link to="/">
          <h1>AUNG</h1>
        </Link>
        <ul className={classes.navMenu}>
          <li>
            <Link to="/">
              <h1>HOME</h1>
            </Link>
          </li>
          <li>
            <Link to="/pricing">
              <h1>PRICING</h1>
            </Link>
          </li>
          <li>
            <Link to="/plans">
              <h1>PLANS</h1>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <h1>CONTACT</h1>
            </Link>
          </li>
        </ul>
        <div className={classes.hamburger} onClick={handleClick}>
          {click ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <ul
          className={classes.navMenuSmall}
          style={{ left: click ? "0px" : "-100vw" }}
        >
          <li>
            <Link to="/">
              <h1>HOME</h1>
            </Link>
          </li>
          <li>
            <Link to="/pricing">
              <h1>PRICING</h1>
            </Link>
          </li>
          <li>
            <Link to="/plans">
              <h1>PLANS</h1>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <h1>CONTACT</h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
