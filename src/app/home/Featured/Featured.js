import React from "react";
import "./featured.css";
import FeaturedFlightCard from "../../components/FeaturedFlightCard";
import LinkButton from "../../components/Buttons/LinkButton";
import flights from "../../components/Flights";
import logos from "../../assets/images/logos";

const Featured = props => {
  let toggleBookingEngine = props.toggleBookingEngine;

  return (
    <div className="featured responsive-height">
      <div className="column center padding-20">
        <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
        <h1 className="font--header bold primary-color margin-none">
          Featured Flights
        </h1>
        <p className="font--medium dark-grey">
          See My Travel Solution's range of great value flights
        </p>
      </div>
      <div className="featured-flight-card-container wrap center">
        {flights.map((flight, i) => {
          return (
            <FeaturedFlightCard
              key={i}
              toggleBookingEngine={toggleBookingEngine}
              flight={flight}
            />
          );
        })}
      </div>
      <div className="center padding-20">
        <LinkButton label="View More" />
      </div>
    </div>
  );
};

export default Featured;
