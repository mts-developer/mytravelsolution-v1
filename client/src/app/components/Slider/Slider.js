import React from "react";
import "./slider.css";

const Slider = props => {
  const { logos, component } = props;

  return (
    <div className="center">
      <div className="slider responsive-width center">
        <div className={`slide-track-${component}`}>
          {logos.map((logo, i) => {
            return (
              <div key={i} className="slide center">
                <img
                  className="logo--x-small padding-x-20"
                  src={logo}
                  alt="Logo"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
