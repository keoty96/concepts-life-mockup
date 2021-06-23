import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

function social() {
  return (
    <div className="social-content">
      <p>follow us</p>
      <div>
        <button className="socialButton">
          <FaTwitter />
        </button>
        <button className="socialButton">
          <FaFacebookF />
        </button>
        <button className="socialButton">
          <FaInstagram />
        </button>
      </div>
    </div>
  );
}

export default social;
