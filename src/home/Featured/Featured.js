import React from "react";
import "./featured.css";
import FeaturedFlightCard from "../../components/FeaturedFlightCard";
import LinkButton from "../../components/Buttons/LinkButton";
import Dialog from "../../components/Dialog";
import logos from "../../assets/images/logos";

const Featured = props => {
  let toggleBookingEngine = props.toggleBookingEngine;
  return (
    <div className="featured">
      <div className="column center padding-20">
        <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
        <h1 className="font--header bold primary-color margin-none">
          Featured Flights
        </h1>
        <p className="font--medium dark-grey">
          See our range of great value flights
        </p>
      </div>
      <div className="featured-container center">
        <FeaturedFlightCard toggleBookingEngine={toggleBookingEngine} />
        <FeaturedFlightCard toggleBookingEngine={toggleBookingEngine} />
        <FeaturedFlightCard toggleBookingEngine={toggleBookingEngine} />
        <FeaturedFlightCard toggleBookingEngine={toggleBookingEngine} />
      </div>
      <div className="more-deals-button center padding-20">
        <LinkButton label="View More" />
      </div>
    </div>
  );
};

export default Featured;
