import React from "react";
import "./featured.css";
import logos from "../../assets/images/logos";

const Featured = () => {
  return (
    <div className="featured column center padding-20">
      <img className="logo--xs" src={logos.mts_logo} alt="MTS Logo" />
      <h1 className="font--large primary-color">Featured Flights</h1>
    </div>
  );
};

export default Featured;
