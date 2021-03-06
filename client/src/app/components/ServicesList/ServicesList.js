import React from "react";
import { Link } from "react-router-dom";
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
            <Link className="serviceslist-link" to={service["url"]}>
              <div className={`icon-circle center middle ${theme}`}>
                <img
                  className="icon--small"
                  src={service[iconTheme]}
                  alt="Service Icon"
                />
              </div>
              <div className="column serviceslist-label">
                <p className={`label-spacing-left font--medium bold ${theme}`}>
                  {service["label"]}
                </p>
                <p className={`label-spacing-left font--small ${theme}`}>
                  {service["description"]}
                </p>
              </div>
            </Link>
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
