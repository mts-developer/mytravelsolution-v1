import React from "react";
import "./serviceslist.css";
import services from "../Services";

const ServicesList = props => {
  var theme,
    iconTheme =
      props.theme === "dark-grey"
        ? // eslint-disable-next-line
          ((theme = "light-grey"), (iconTheme = "grey"))
        : // eslint-disable-next-line
          ((theme = "white"), (iconTheme = "white"));

  return (
    <div className="serviceslist">
      {services.map((service, i) => {
        return (
          <ul key={i}>
            <a className="serviceslist-link" href={service["url"]}>
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

ServicesList.defaultProps = {
  theme: "dark-grey"
};

export default ServicesList;
