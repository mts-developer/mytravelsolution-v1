import React from "react";
import "./featured.css";
import FeaturedFlightCard from "../../components/FeaturedFlightCard";
import logos from "../../assets/images/logos";

const Featured = () => {
  return (
    <div className="featured padding-20">
      <div className="column center">
        <img className="logo--xs" src={logos.mts_logo} alt="MTS Logo" />
        <h1 className="font--large primary-color">Featured Flights</h1>
      </div>
      <div className="column center">
        <FeaturedFlightCard />
        <FeaturedFlightCard />
        <FeaturedFlightCard />
        <FeaturedFlightCard />
        <FeaturedFlightCard />
      </div>
    </div>
  );
};

export default Featured;
