import React from "react";
import "./hero.css";
import Header from "../../components/Header";
import ActionButton from "../../components/Buttons/ActionButton";
import Angle from "../../components/Angle";
import colors from "../../themes/colors";
import videos from "../../assets/videos";

const Hero = props => {
  const clickBookingEngine = props.clickBookingEngine;

  return (
    <div className="hero">
      <video className="herovideo" autoPlay muted loop>
        <source src={videos.clouds_mp4} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="hero-container padding-20">
        <Header />
        <div className="responsive-width">
          <div className="hero-title">
            <h1 className="white font--title bold font-shadow margin-none">
              Your journey begins
            </h1>
            <h2 className="white font--large thin margin-none margin-top-5">
              Discover the world today
            </h2>
          </div>
          <div className="column padding-top-20">
            <ActionButton
              action={e => clickBookingEngine(e)}
              label="Book Your Flight Now"
              width="160px"
            />
            <p className="hero__hours-text white font--small">
              Or call our office 7 days a week
              <br />
              from 9-6pm.
            </p>
          </div>
        </div>
      </div>
      <Angle fill={colors.white} />
    </div>
  );
};

export default Hero;
