import React from "react";
import "./featuredflightcard.css";
import LabelActionButton from "../Buttons/LabelActionButton";
import {
  toTitleCase,
  commaFormatNumbers,
  dateFormatLongMonthDay,
  dateFormatShortDayMonth,
  dateFormatShortMonthDayYear,
  pluraliseString
} from "../../utils";

const FeaturedFlightCard = props => {
  const clickBookingEngine = props.clickBookingEngine;
  const flight = props.flight;

  let expiry = dateFormatLongMonthDay(flight.expiry);
  let name = toTitleCase(flight.name);
  let featuredImage = flight.featuredImage;
  let airline = flight.airline;
  let origin = toTitleCase(flight.origin);
  let destination = toTitleCase(flight.destination);
  var returnFlight =
    flight.returnFlight === true
      ? // eslint-disable-next-line
        (returnFlight = "Return")
      : // eslint-disable-next-line
        (returnFlight = "");
  let price = commaFormatNumbers(flight.price);
  let travelPeriods = flight.travelPeriods;

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
              className="logo--small margin-10"
              src={airline.airlineImage}
              alt={airline.airlineName}
            />
          </div>
          <div className="featuredflightcard-grid grid-columns-2 full-width">
            <div>
              <p className="font--small">{`${origin} - ${destination} ${returnFlight}`}</p>
              <p className="font--large semi-bold">{`from $${price}*`}</p>
            </div>
            <div>
              <p className="font--small">
                {pluraliseString("Travel Period", travelPeriods)}
              </p>
              {travelPeriods.map((travelPeriod, i) => {
                return (
                  <p key={i} className="font--small semi-bold">
                    {`${dateFormatShortDayMonth(
                      travelPeriod.from
                    )} - ${dateFormatShortMonthDayYear(travelPeriod.to)}`}
                  </p>
                );
              })}
            </div>
            <div>
              <p className="font--small">/ MORE INFORMATION /</p>
            </div>
          </div>
          <p className="font--small light-grey">* Conditions Apply</p>
          <div className="right">
            <LabelActionButton
              label="Book Now"
              onClick={e => clickBookingEngine(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFlightCard;
