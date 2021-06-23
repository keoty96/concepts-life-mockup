import React from "react";
import { trendsData } from "../../data/trends";
import Link from "./Link";

function Content() {
  let value = trendsData.map((item) => {
    if (item.type === "info") {
      return (
        <div className="trends-active" key={item.id}>
          <p className="title">{item.content.title}</p>
          <p className="text">{item.content.text}</p>
          <Link
            classname="link-button"
            link="https://www.conceptslife.com/tendencias-s/"
            text={item.content.linkText}
          />
        </div>
      );
    }

    if (item.type === "img") {
      return (
        <img
          key={item.id}
          src={item.content.img}
          className="trends-img"
          alt="trends"
        />
      );
    }

    if (item.type === "blank") {
      return <div key={item.id} className="trends-blank" />;
    }
  });

  return value;
}

function trends() {
  return (
    <div className="trends trends-wrap" id="#trends">
      <Content />
    </div>
  );
}

export default trends;
