import React from "react";
import "./dialogfooter.css";
import quickLinks from "../QuickLinks";
import LinkButton from "../Buttons/LinkButton";

const DialogFooter = () => {
  return (
    <div className="dialogfooter padding-top-10">
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
        <LinkButton label="Call Us" url="tel:0393146957" width="80px" />
      </div>
    </div>
  );
};

export default DialogFooter;
