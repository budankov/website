import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div
        className="navbar-content"
        onClick={() => (window.location.href = "/")}
      >
        <p className="navbar-logo">{"<Budankov.dev/>"}</p>

        <div className="navbar-actions">
          <div
            onClick={() => window.open("mailto:budankov@gmail.com")}
            className="navbar-contact"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
