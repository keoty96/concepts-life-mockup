import React from "react";
import image from "../../images/collections.jpg";
import Link from "./Link";

function collections() {
  return (
    <div className="trends" id="#collections">
      <div className="collection-img">
        <img src={image} className="img" alt="collections" />
      </div>
      <div className="collection-text">
        <p className="title">Shop anything and everything</p>
        <p className="text">
          Dolor fermentum tristique eget id nisl. Ut vel varius risus. Orci
          varius natoque penatibus et magris dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <Link
          classname="link-button"
          link="https://www.conceptslife.com/colecciones/"
          text="browse our collections"
        />
      </div>
    </div>
  );
}

export default collections;
