import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const clickHandler = () => {
    window.history.back();
  };
  return (
    <div>
      <nav>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li onClick={clickHandler}>
            <Link>Back</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;
