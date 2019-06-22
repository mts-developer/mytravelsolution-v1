import React from "react";
import "./carousel.css";
import logos from "../../assets/images/logos/airlines";

const Carousel = props => {
  return (
    <div className="center">
      <div className="slider responsive-width center">
        <div className="slide-track">
          {logos.map((logo, i) => {
            return (
              <div key={i} className="slide center">
                <img
                  className="logo--x-small padding-x-20"
                  src={logo}
                  alt="Airline Logo"
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
