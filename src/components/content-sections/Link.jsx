import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Link = ({link, text, classname}) => {
  return (
      <button
        href={link}
        className={classname}
        target="_blank"
      >
        {text}
        <FaArrowRight style={{paddingLeft: "10px"}} />
      </button>      
  );
};

export default Link;
