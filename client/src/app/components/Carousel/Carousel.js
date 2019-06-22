import React from "react";
import "./carousel.css";
import logos from "../../assets/images/logos/airlines";

const Carousel = props => {
  return (
    <div className="center">
      <div className="slider center">
        <div className="slide-track">
          {logos.map(logo => {
            return (
              <div className="slide">
                <img
                  className="logo--x-small"
                  src={logo}
                  alt="Airline Logo"
                  height="100"
                  width="250"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
