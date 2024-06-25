import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link className="link" to="/">
          Zameen Square
        </Link>
      </div>
      <nav className={isOpen ? "is-active" : ""}>
        <Link className="link" to="/buy">
          Buy
        </Link>
        <Link className="link" to="/rent">
          Rent
        </Link>
        <Link className="link" to="/sell">
          Sell
        </Link>
        <Link className="link" to="/pg">
          PG
        </Link>
        <Link className="link" to="/post-property">
          Post Property
        </Link>
      </nav>
      <div className="login">
        <Link className="link" id="log" to="/login">
          Login
        </Link>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default NavBar;
