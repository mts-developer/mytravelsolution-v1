import React from "react";
import "./featuredflightcard.css";
import LabelActionButton from "../Buttons/LabelActionButton";
import logos from "../../assets/images/logos";

const FeaturedFlightCard = props => {
  const toggleBookingEngine = props.toggleBookingEngine;

  return (
    <div className="featuredflightcard center full-width column card-shadow">
      <div className="featuredflightcard-expiry center">
        <h2 className="font--medium white bold">
          Offer extended until July 20
        </h2>
      </div>
      <div className="featuredflightcard-title center middle">
        <h2 className="font--large white bold">Australia Day Special</h2>
      </div>
      <div className="featuredflightcard-top featuredflightcard-height full-width" />
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
              <p className="font--small">Mel - Mnl Return</p>
              <p className="font--large semi-bold">from $589*</p>
            </div>
            <div>
              <p className="font--small">Mel - Mnl Return</p>
              <p className="font--large semi-bold">from $709*</p>
            </div>
            <div>
              <p className="font--small">Travel Period</p>
              <p className="font--small semi-bold">1 May - 30 Nov</p>
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
