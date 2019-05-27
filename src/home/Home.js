import React from "react";
import "../App.css";
import "./home.css";
import Hero from "./Hero";
import Featured from "./Featured";

function Home() {
  return (
    <div className="home">
      <section className="header-section">
        <Hero />
      </section>
      <section className="featured-section">
        <Featured />
      </section>
    </div>
  );
}

export default Home;
