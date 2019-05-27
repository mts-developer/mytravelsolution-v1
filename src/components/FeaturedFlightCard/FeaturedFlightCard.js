import React from "react";
import "./featuredflightcard.css";
import LabelActionButton from "../Buttons/LabelActionButton";
import logos from "../../assets/images/logos";

const FeaturedFlightCard = () => {
  return (
    <div className="featuredflightcard center full-width column card-shadow">
      <div className="featuredflightcard-title center middle">
        <h2 className="font--large white">Winter Getaway Promo</h2>
      </div>
      <div className="featuredflightcard-top featuredflightcard-height full-width" />
      <div className="featuredflightcard-bottom featuredflightcard-height full-width">
        <div className="padding-20">
          <div className="center">
            <img
              className="logo--xxs"
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
          <div className="right">
            <LabelActionButton label="Book Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFlightCard;
