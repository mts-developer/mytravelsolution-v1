import React from "react";
import "./featuredflightcard.css";
import LabelActionButton from "../Buttons/LabelActionButton";
import logos from "../../assets/images/logos";
import moment from "moment";
import { toTitleCase, commaFormatNumbers } from "../../utils";

const FeaturedFlightCard = props => {
  const toggleBookingEngine = props.toggleBookingEngine;
  const flight = props.flight;

  let expiry = moment(flight.expiry).format("MMMM DD");
  let name = toTitleCase(flight.name);
  let featuredImage = flight.featuredImage;
  // let airline = flight.airline.toUpperCase();
  let origin = toTitleCase(flight.origin);
  let destination = toTitleCase(flight.destination);
  var returnFlight =
    flight.returnFlight === true
      ? // eslint-disable-next-line
        (returnFlight = "Return")
      : // eslint-disable-next-line
        (returnFlight = "");
  let price = commaFormatNumbers(flight.price);
  let travelPeriodFrom = moment(flight.travelPeriodFrom).format("MMM DD");
  let travelPeriodTo = moment(flight.travelPeriodTo).format("MMM DD YYYY");

  const image = {
    backgroundImage: `url(${featuredImage})`
  };

  return (
    <div className="featuredflightcard center full-width column card-shadow">
      <div className="featuredflightcard-expiry center">
        <h2 className="font--medium white bold">
          {`Offer valid until ${expiry}`}
        </h2>
      </div>
      <div className="featuredflightcard-title center middle">
        <h2 className="font--large white bold">{name}</h2>
      </div>
      <div
        className="featuredflightcard-top featuredflightcard-height full-width"
        style={image}
      />
      <div className="featuredflightcard-bottom featuredflightcard-height full-width">
        <div className="padding-20">
          <div className="center">
            <img
              className="logo--small"
              src={logos.qantas_logo}
              alt="Qantas Logo"
            />
          </div>
          <div className="featuredflightcard-grid grid-columns-2 full-width">
            <div>
              <p className="font--small">{`${origin} - ${destination} ${returnFlight}`}</p>
              <p className="font--large semi-bold">{`from $${price}*`}</p>
            </div>
            <div>
              <p className="font--small">/ MORE INFORMATION /</p>
            </div>
            <div>
              <p className="font--small">Travel Period</p>
              <p className="font--small semi-bold">{`${travelPeriodFrom} - ${travelPeriodTo}`}</p>
            </div>
          </div>
          <p className="font--small light-grey">* Conditions Apply</p>
          <div className="right">
            <LabelActionButton
              label="Book Now"
              onClick={e => toggleBookingEngine(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFlightCard;
