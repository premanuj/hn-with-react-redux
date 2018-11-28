import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Hacker News
        </NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link active" to="/">
            Home <span className="sr-only">(current)</span>
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
