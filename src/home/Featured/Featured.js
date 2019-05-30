import React from "react";
import "./featured.css";
import FeaturedFlightCard from "../../components/FeaturedFlightCard";
import LinkButton from "../../components/Buttons/LinkButton";
import Dialog from "../../components/Dialog";
import logos from "../../assets/images/logos";

const Featured = props => {
  let toggleBookingEngine = props.toggleBookingEngine;
  return (
    <div className="featured padding-20">
      <div className="column center">
        <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
        <h1 className="font--header bold primary-color">Featured Flights</h1>
      </div>
      <div className="column center">
        <FeaturedFlightCard toggleBookingEngine={toggleBookingEngine} />
        <FeaturedFlightCard toggleBookingEngine={toggleBookingEngine} />
        <FeaturedFlightCard toggleBookingEngine={toggleBookingEngine} />
      </div>
      <div className="more-deals-button center">
        <LinkButton label="View More" />
      </div>
    </div>
  );
};

export default Featured;
