import React from "react";
import "./tourcard.css";
import LabelLinkButton from "../Buttons/LabelLinkButton";
import { toTitleCase, commaFormatNumbers } from "../../utils";

const TourCard = props => {
  const { tour } = props;

  const name = toTitleCase(tour.name);
  const description = tour.description;
  const originCity = toTitleCase(tour.originCity);
  const destinationCity = toTitleCase(tour.destinationCity);
  const duration = tour.duration;
  const remarks = tour.remarks;
  const price = tour.price;

  const citiesVisited = [];
  tour.citiesVisited.map(city => {
    return citiesVisited.push(toTitleCase(city));
  });

  const countriesVisited = [];
  tour.countriesVisited.map(country => {
    return countriesVisited.push(toTitleCase(country));
  });

  const image = {
    backgroundImage: `url(${tour.image})`,
    backgroundPosition: "center"
  };

  return (
    <div className="tourcard column card-shadow">
      <div className="tourcard-left padding-20" style={image} />
      <div className="tourcard-right padding-20">
        <h2 className="font--large bold primary-color margin-none">{name}</h2>
        <p>{description}</p>
        <div className="tourcard-locations grid-columns-2 margin-y-20">
          <div>
            <p className="bold">From</p>
            <p className="bold light-grey">{originCity}</p>
          </div>
          <div>
            <p className="bold">To</p>
            <p className="bold light-grey">{destinationCity}</p>
          </div>
        </div>
        <div className="margin-y-20">
          {countriesVisited.length === 1 ? (
            <div>
              <p className="bold">Cities visited</p>
              <p className="font--small">{citiesVisited.join(", ")}</p>
            </div>
          ) : (
            <div>
              <p className="bold">Countries visited</p>
              <p className="font--small">{countriesVisited.join(", ")}</p>
            </div>
          )}
        </div>
        <p className="bold margin">Duration</p>
        <p className="font--small">
          {duration.days} Days, {duration.nights} Nights
        </p>
        <div className="tourcard-remarks margin-top-20 padding-10">
          {remarks.map((remark, i) => {
            return (
              <ul key={i}>
                <li className="font--small light-grey padding-top-5">
                  {remark}
                </li>
              </ul>
            );
          })}
        </div>
        <hr className="margin-y-20" />
        <div className="tourcard-info-bottom space-between middle">
          <div className="row">
            <p className="bold padding-5 font--small">from</p>
            <p className="font--header bold">{`$${commaFormatNumbers(
              price
            )}`}</p>
          </div>
          <LabelLinkButton label="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default TourCard;
