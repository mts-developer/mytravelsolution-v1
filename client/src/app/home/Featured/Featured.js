import React from "react";
import "./featured.css";
import FeaturedFlightCard from "../../components/FeaturedFlightCard";
import LinkButton from "../../components/Buttons/LinkButton";
import flights from "../../components/Flights";
import logos from "../../assets/images/logos";

import Slider from "react-slick";

const Featured = props => {
  const clickBookingEngine = props.clickBookingEngine;
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1495,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  return (
    <div className="featured">
      <div className="column center padding-20">
        <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
        <h1 className="font--header bold primary-color margin-none">
          Featured Flights
        </h1>
        <p className="font--medium font--center">
          See My Travel Solution's range of great value flights
        </p>
      </div>
      <div className="slide-container">
        <Slider {...settings}>
          {flights.map((flight, i) => {
            return (
              <FeaturedFlightCard
                key={i}
                clickBookingEngine={clickBookingEngine}
                flight={flight}
              />
            );
          })}
        </Slider>
      </div>
      <div className="center padding-20 margin-top-20">
        <LinkButton label="View More Flights" url={"/featured-flights"} />
      </div>
    </div>
  );
};

export default Featured;
