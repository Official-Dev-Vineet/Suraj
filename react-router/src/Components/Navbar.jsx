import { NavLink } from "react-router-dom";
import "./styles/navbar.css";
import { useContext } from "react";
import { GlobalData } from "../Helper/GlobalData";
const Navbar = () => {
  const { name } = useContext(GlobalData);
  return (
    <nav>
      <div className="logo">{name}</div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/api">Api</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
