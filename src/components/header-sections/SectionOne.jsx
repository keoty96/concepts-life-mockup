import React from "react";
import logo from "../../images/concepts-life-logo.png";
import image from "../../images/mueble-one.jpg";

const SectionOne = () => {
  return (
    <div className="section-one">
      <div className="logo-header">
        <img
          src={logo}
          style={{ height: "50px", width: "200px", }}
          alt="Concepts Life Logo"
        />
        <div style={{ textAlign: "center" }}>
          <a href="#trends" className="nav-links">
            trends
          </a>
          <a href="#collections" className="nav-links">
            collections
          </a>
          <a href="#tips" className="nav-links">
            tips & guides
          </a>
          <a href="#store" className="nav-links">
            find a store
          </a>
          <a href="#contact" className="nav-links">
            contact us
          </a>
        </div>
      </div>

      <div className="nav">
        <img src={logo} className="logo" alt="Concepts Life Logo" />
        <a href="#trends" className="nav-links">
          trends
        </a>
        <a href="#collections" className="nav-links">
          collections
        </a>
        <a href="#tips" className="nav-links">
          tips & guides
        </a>
      </div>
      <div style={{ height: "90vh" }}>
        <img src={image} className="header-image" alt="Concepts Life Logo" />
      </div>
    </div>
  );
};

export default SectionOne;
