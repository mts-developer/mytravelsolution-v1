import React from "react";
import "../App.css";
import "./home.css";
import Hero from "./Hero";
import Featured from "./Featured";
import Services from "./Services";
import Visa from "./Visa";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <Hero />
      </section>
      <section className="featured-section">
        <Featured />
      </section>
      <section className="services-section">
        <Services />
      </section>
      <section className="visa-section">
        <Visa />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
