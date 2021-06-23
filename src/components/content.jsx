import React from "react";
import Trends from "./content-sections/trends";
import Collections from "./content-sections/collections";
import Tips from "./content-sections/tips";
import Location from "./content-sections/location";
import "../styles/content.css"

function content() {
  return (
    <div className="content">
      <Trends />
      <Collections />
      <Tips />
      <Location />
    </div>
  );
}

export default content;
