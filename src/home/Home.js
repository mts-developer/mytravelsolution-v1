import React from "react";
import "../App.css";
import "./home.css";
import Hero from "./Hero";
import Featured from "./Featured";
import Services from "./Services";

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <Hero />
      </section>
      <section className="featured-section">
        <Featured />
      </section>
      <section className="our-services">
        <Services />
        And some more shitttt
      </section>
    </div>
  );
}

export default Home;
