import React from "react";
import "./menucontent.css";
import services from "../../../Services";

const MenuContent = () => {
  return (
    <div className="menucontent">
      {services.map((service, i) => {
        return (
          <ul key={i}>
            <a className="menucontent-link" href={service["url"]}>
              <div className="icon-circle dark-grey align-center align-middle">
                <img
                  className="icon--small"
                  src={service["grey_image"]}
                  alt="Service Icon"
                />
              </div>
              <p className="label-spacing-left font--medium dark-grey">
                {service["label"]}
              </p>
            </a>
          </ul>
        );
      })}
    </div>
  );
};

export default MenuContent;
