import React from "react";
import "./hero.css";
import Header from "../../components/Header";
import ActionButton from "../../components/Buttons/ActionButton";

const Hero = () => {
  return (
    <div className="hero hero-background hero-background--angle">
      <div className="hero-background--reset-angle">
        <Header />
        <div className="hero-title">
          <h1 className="margin-none white font--header">
            Your journey
            <br />
            begins
          </h1>
          <h2 className="white font--large thin">Discover the world today</h2>
        </div>
        <div className="column">
          <ActionButton label="Book Now" width="80px" />
          <p className="hero__hours-text white font--small">
            Or call our office 7 days a week
            <br />
            from 9-5pm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
