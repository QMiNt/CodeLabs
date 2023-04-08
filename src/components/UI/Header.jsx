import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-no-background.png";

const Header = () => {
  return (
    <header
      className="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img src={logo} alt="logo" width={""} height={"75vh"} />
              </Link>
              <ul className="nav">
                <li className="scroll-to-section">
                  <Link to="/home" >
                    Home
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/build">Build</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/visualize">Visualize</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/explain">Explain</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/discuss">Discuss</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/contests">Contests</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/analyze">Analyze</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
