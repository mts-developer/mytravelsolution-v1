import React from "react";
import "./tourcard.css";
import LabelLinkButton from "../Buttons/LabelLinkButton";

const TourCard = () => {
  return (
    <div className="tourcard column card-shadow">
      <div className="tourcard-left padding-20" />
      <div className="tourcard-right padding-20">
        <h2 className="font--large bold margin-none">Central Europe</h2>
        <p>Explore a 15 Day Guided Tour from Frankfurt to Frankfurt</p>
        <div className="tourcard-locations grid-columns-2 margin-y-20">
          <div>
            <p className="bold">From</p>
            <p className="bold primary-color">Frankfurt</p>
          </div>
          <div>
            <p className="bold">To</p>
            <p className="bold primary-color">Frankfurt</p>
          </div>
        </div>
        <div className="margin-y-10">
          <p className="bold">Countries visited</p>
          <p className="font--small">
            Germany, Poland, Slovakia, Hungary, Austria, Czech Republic
          </p>
        </div>
        <p className="bold">Duration</p>
        <p className="font--small">13 Days, 12 Nights</p>
        <div className="margin-top-20">
          <p className="font--small light-grey padding-top-5">
            - 3 to 4 star accommodation
          </p>
          <p className="font--small light-grey padding-top-5">
            - Max group size of 40
          </p>
          <p className="font--small light-grey padding-top-5">
            - Scenic/Cultural trip style
          </p>
        </div>
        <hr className="off-white margin-y-20" />
        <div className="tourcard-info-bottom space-between middle">
          <div className="row">
            <p className="bold padding-5">From</p>
            <p className="font--header bold">$2,965</p>
          </div>
          <LabelLinkButton label="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default TourCard;
