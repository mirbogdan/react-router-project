import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navStyles">
      <NavLink to="/">Products</NavLink>
      <NavLink to="admin">Admin</NavLink>
    </nav>
  );
};

export default Nav;
