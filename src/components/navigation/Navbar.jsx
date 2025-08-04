import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <NavLink className="nav-link" to="/home">
        <img src={logo} alt="Logo-one-place" />
      </NavLink>
      <NavLink className="nav-link" to="/home">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/products">
        Products
      </NavLink>
      <NavLink className="nav-link" to="/shoppingcart">
        Shopping Cart
      </NavLink>
      <NavLink className="nav-link" to="/contact">
        Contact
      </NavLink>
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
    </div>
  );
}
