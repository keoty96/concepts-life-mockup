import React from "react";
import { tipsData } from "../../data/tipsData";
import Link from "./Link";

function tips() {
  return (
    <div className="trends" id="#tips">
      {tipsData.map((item) => (
        <div key={item.id} className="tips">
          <div className="tips-blank" />
          <div className="tips-context">
            <p className="title">{item.title}</p>
            <p className="text">{item.text}</p>
            <Link
              classname="link-button"
              link="https://www.conceptslife.com/tendencias-s/"
              text={item.linkText}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default tips;
