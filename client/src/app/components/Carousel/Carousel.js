import React from "react";
import "./carousel.css";
import Slider from "react-slick";
import icons from "../../assets/images/icons";

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

const Carousel = props => {
  return (
    <div className="slide-container">
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
};

export default Carousel;
