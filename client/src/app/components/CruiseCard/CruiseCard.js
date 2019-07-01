import React from "react";
import "./cruisecard.css";
import LabelLinkButton from "../Buttons/LabelLinkButton";
import { toTitleCase, commaFormatNumbers } from "../../utils";

const CruiseCard = props => {
  const { cruise } = props;

  const name = toTitleCase(cruise.name);
  const featuredImage = cruise.featuredImage;
  const ship = toTitleCase(cruise.ship);
  const cruiseLine = cruise.cruiseLine;
  const origin = toTitleCase(cruise.origin);
  const destination = toTitleCase(cruise.destination);
  const duration = cruise.duration;
  const price = commaFormatNumbers(cruise.price);
  const departureDate = cruise.departureDate;
  const remarks = cruise.remarks;
  const ports = [];
  cruise.ports.map(port => {
    return ports.push(toTitleCase(port));
  });

  const image = {
    backgroundImage: `url(${featuredImage})`,
    backgroundPosition: "center"
  };

  return (
    <div className="cruisecard center full-width column card-shadow">
      <div className="cruisecard-title center middle">
        <h2 className="font--center font--large white bold">{name}</h2>
      </div>
      <div
        className="cruisecard-top cruisecard__image full-width"
        style={image}
      />
      <div className="cruisecard-bottom full-width">
        <div className="padding-20">
          <div className="center">
            <img
              className="logo--small margin-10"
              src={cruiseLine.cruiseLineImage}
              alt={cruiseLine.cruiseLineName}
            />
          </div>
          <div className="full-width row wrap space-between">
            <div className="padding-top-20">
              <p className="font--medium bold">{ship}</p>
              <p className="font--medium primary-color bold">{`${origin} to ${destination}`}</p>
            </div>
            <div className="row padding-top-20">
              <p className="font--small bold">from</p>
              <p className="font--header bold margin-x-5">{`$${price}pp*`}</p>
            </div>
          </div>
          <div className="cruisecard-grid grid-columns-2 padding-top-20">
            <div>
              <p className="font--medium bold">Departure</p>
              <p className="font--medium font--no-wrap">{departureDate}</p>
            </div>
            <div>
              <p className="font--medium bold">Duration</p>
              <p className="font--medium">
                {duration.days} Days, {duration.nights} Nights
              </p>
            </div>
          </div>
          <div className="padding-top-10">
            <p className="font--medium bold">Cruise Ports</p>
            <p className="font--medium">{ports.join(", ")}</p>
          </div>
          <div className="cruisecard-remarks padding-10 padding-top-20">
            {remarks.map((remark, i) => {
              return (
                <ul key={i}>
                  <li className="font--small light-grey padding-y-5">
                    {remark}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="padding-y-20 space-between row middle">
            <p className="font--small light-grey bold">* Conditions Apply</p>
            <LabelLinkButton label="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CruiseCard;
