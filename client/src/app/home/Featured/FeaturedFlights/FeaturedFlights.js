import React from "react";
import "./featuredflights.css";
import FeaturedFlightCard from "../../../components/FeaturedFlightCard";
import LabelLinkButton from "../../../components/Buttons/LabelLinkButton";
import Carousel from "../../../components/Carousel";
import flights from "../../../components/Flights";

const FeaturedFlights = props => {
  const clickBookingEngine = props.clickBookingEngine;
  return (
    <div className="featuredflights">
      <Carousel>
        {flights.map((flight, i) => {
          return (
            <FeaturedFlightCard
              key={i}
              clickBookingEngine={clickBookingEngine}
              flight={flight}
            />
          );
        })}
      </Carousel>
      <div className="center margin-y-20">
        <LabelLinkButton label="View More Flights →" url={"featured-flights"} />
      </div>
    </div>
  );
};

export default FeaturedFlights;
