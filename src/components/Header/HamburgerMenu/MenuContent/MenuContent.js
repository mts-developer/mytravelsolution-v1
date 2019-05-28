import React from "react";
import "./menucontent.css";
import services from "../../../Services";

const MenuContent = props => {
  var theme,
    iconTheme =
      props.theme === "dark"
        ? ((theme = "dark-grey"), (iconTheme = "dark"))
        : ((theme = "white"), (iconTheme = "light"));

  return (
    <div className="menucontent">
      {services.map((service, i) => {
        return (
          <ul key={i}>
            <a className="menucontent-link" href={service["url"]}>
              <div className={`icon-circle center middle ${theme}`}>
                <img
                  className="icon--small"
                  src={service[iconTheme]}
                  alt="Service Icon"
                />
              </div>
              <p className={`label-spacing-left font--medium ${theme}`}>
                {service["label"]}
              </p>
            </a>
          </ul>
        );
      })}
    </div>
  );
};

MenuContent.defaultProps = {
  theme: "dark"
};

export default MenuContent;
