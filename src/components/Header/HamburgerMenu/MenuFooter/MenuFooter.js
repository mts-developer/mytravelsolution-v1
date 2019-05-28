import React from "react";
import "./menufooter.css";
import quickLinks from "../../../QuickLinks";
import LinkButton from "../../../Buttons/LinkButton";

const MenuFooter = () => {
  return (
    <div className="padding-top-10">
      <div className="grid-columns-2">
        {quickLinks.map((quickLink, i) => {
          return (
            <ul key={i}>
              <a className="button-padding" href={quickLink["url"]}>
                <p className="font--small dark-grey">{quickLink["label"]}</p>
              </a>
            </ul>
          );
        })}
      </div>
      <div className="right">
        <LinkButton label="Contact Us" url="tel:0393146957" />
      </div>
    </div>
  );
};

export default MenuFooter;
