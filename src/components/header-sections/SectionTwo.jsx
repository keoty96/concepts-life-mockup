import React from "react";
import Link from "../content-sections/Link"

const SectionTwo = () => {
  return (
    <div className="section-two">
      <div className="nav">
        <a href="#store" className="nav-links">
          find a store
        </a>
        <a href="#contact" className="nav-links">
          contact us
        </a>
      </div>
      <div className="header-content">
        <p className="header-title">Retro: Old is New Again</p>
        <p className="text">
          Dolor fermentum tristique eget id nisl. Ut vel varius risus. Orci
          varius natoque penatibus et magris dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <Link
          classname="link-button map-text"
          link="https://www.conceptslife.com/encuentranos/"
          text="discover this trend"
        />
      </div>
    </div>
  );
};

export default SectionTwo;
