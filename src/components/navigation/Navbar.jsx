import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/icons/logo-icon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-cantainer">
      <button
        className="hamburger-menu"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>

      <div
        className={`navbar-wrapper ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <NavLink className="nav-link" to="/home">
          <img src={logo} alt="Logo-one-place" />
        </NavLink>

        <NavLink
          className="nav-link"
          to="/home"
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          to="/products"
          onClick={() => setIsOpen(false)}
        >
          Products
        </NavLink>
        <NavLink
          className="nav-link"
          to="/shoppingcart"
          onClick={() => setIsOpen(false)}
        >
          Shopping Cart
        </NavLink>
        <NavLink
          className="nav-link"
          to="/contact"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
        <NavLink
          className="nav-link"
          to="/about"
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
      </div>
    </div>
  );
}
