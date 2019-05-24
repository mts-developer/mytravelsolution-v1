import React from "react";
import "./hero.css";
import Header from "../../components/Header";

const Hero = () => {
  return (
    <div className="hero hero-background hero-background--angle">
      <div className="hero-background--reset-angle">
        <Header />
        <div>More Shit</div>
      </div>
    </div>
  );
};

export default Hero;
