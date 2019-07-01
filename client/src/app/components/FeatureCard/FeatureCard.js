import React from "react";
import "./featurecard.css";
import LabelActionButton from "../Buttons/LabelActionButton";
import {
  toTitleCase,
  commaFormatNumbers,
  dateFormatLongMonthDay,
  dateFormatShortDayMonth,
  dateFormatShortMonthDayYear,
  pluraliseString
} from "../../utils";

const FeatureCard = props => {
  const { clickBookingEngine, flight } = props;

  const expiry = dateFormatLongMonthDay(flight.expiry);
  const name = toTitleCase(flight.name);
  const featuredImage = flight.featuredImage;
  const airline = flight.airline;
  const origin = flight.origin.toUpperCase();
  const destination = flight.destination.toUpperCase();
  var returnFlight =
    flight.returnFlight === true
      ? // eslint-disable-next-line
        (returnFlight = "Return")
      : // eslint-disable-next-line
        (returnFlight = "");
  const price = commaFormatNumbers(flight.price);
  const travelPeriods = flight.travelPeriods;
  const remarks = flight.remarks;

  const image = {
    backgroundImage: `url(${featuredImage})`,
    backgroundPosition: "center"
  };

  return (
    <div className="featurecard center full-width column card-shadow">
      <div className="featurecard-expiry center">
        <h2 className="font--medium white bold">
          {`Offer valid until ${expiry}`}
        </h2>
      </div>
      <div className="featurecard-title font--center center middle">
        <h2 className="font--large white bold">{name}</h2>
      </div>
      <div
        className="featurecard-top featurecard-height full-width"
        style={image}
      />
      <div className="featurecard-bottom featurecard-height full-width">
        <div className="padding-20">
          <div className="center">
            <img
              className="logo--small margin-10"
              src={airline.airlineImage}
              alt={airline.airlineName}
            />
          </div>
          <div className="featurecard-grid grid-columns-2 full-width">
            <div>
              <p className="font--medium primary-color bold">{`${origin} - ${destination} ${returnFlight}`}</p>
              <div className="row margin-top-5">
                <p className="font--small bold">from</p>
                <p className="font--header bold margin-x-5">{`$${price}*`}</p>
              </div>
            </div>
            <div>
              <p className="font--medium bold">
                {pluraliseString("Travel Period", travelPeriods)}
              </p>
              {travelPeriods.map((travelPeriod, i) => {
                return (
                  <p key={i} className="font--small font--no-wrap padding-y-5">
                    {`${dateFormatShortDayMonth(
                      travelPeriod.from
                    )} - ${dateFormatShortMonthDayYear(travelPeriod.to)}`}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="featurecard-remarks padding-top-15">
            {remarks.map((remark, i) => {
              return (
                <p key={i} className="font--small light-grey padding-y-5">
                  {`- ${remark}`}
                </p>
              );
            })}
          </div>
        </div>
        <div className="padding-20 space-between row middle">
          <p className="font--small light-grey bold">* Conditions Apply</p>
          <LabelActionButton
            label="Book Now"
            onClick={e => clickBookingEngine(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
