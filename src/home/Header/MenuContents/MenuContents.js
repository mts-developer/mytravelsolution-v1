import React from "react";
import "./menucontents.css";
import services from "../Services";

const MenuContents = () => {
  return (
    <div>
      {services.map((service, i) => {
        return (
          <ul key={i}>
            <a href={service["url"]}>
              <img
                className="icon--xs menucontents__service-icon"
                src={service["grey_image"]}
                alt="Service Icon"
              />
              <p className="font--sm menucontents__service-label">
                {service["label"]}
              </p>
            </a>
          </ul>
        );
      })}
    </div>
  );
};

export default MenuContents;
