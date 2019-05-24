import React from "react";
import "./menucontent.css";
import services from "../../../Services";

const MenuContent = () => {
  return (
    <div className="menucontent">
      {services.map((service, i) => {
        return (
          <ul key={i}>
            <a href={service["url"]}>
              <img
                className="icon--small button-padding"
                src={service["grey_image"]}
                alt="Service Icon"
              />
              <p className="font--medium dark-grey">{service["label"]}</p>
            </a>
          </ul>
        );
      })}
    </div>
  );
};

export default MenuContent;
