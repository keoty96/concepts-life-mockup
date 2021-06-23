import React from "react";
import SectionOne from "./header-sections/SectionOne";
import SectionTwo from "./header-sections/SectionTwo";

function header() {
  return (
    <div className="header">
      <SectionOne />
      <SectionTwo />      
    </div>
  );
}

export default header;
