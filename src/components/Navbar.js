import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav id="myNav" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <strong>
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
        </strong>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label nav-item"
              htmlFor="flexSwitchCheckDefault"
            >
              Switch to {props.mode === "light" ? "Dark" : "Light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

// Alternative to parameter passsing in App.js
Navbar.defaultProps = {
  title: "TextUtils",
};
