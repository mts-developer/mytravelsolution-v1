import React from "react";
import "./menufooter.css";
import quickLinks from "../../../QuickLinks";

const MenuFooter = () => {
  return (
    <div className="menufooter grid-columns-2">
      {quickLinks.map((quickLink, i) => {
        return (
          <div>
            <ul key={i}>
              <a href={quickLink["url"]}>
                <p className="font--small dark-grey">{quickLink["label"]}</p>
              </a>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default MenuFooter;
