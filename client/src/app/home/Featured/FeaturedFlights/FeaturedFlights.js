import React from "react";
import "./featuredflights.css";
import FeaturedFlightCard from "../../../components/FeaturedFlightCard";
import LinkButton from "../../../components/Buttons/LinkButton";
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
      <div className="center padding-20 margin-top-20">
        <LinkButton label="View More Flights" url={"/featured-flights"} />
      </div>
    </div>
  );
};

export default FeaturedFlights;
