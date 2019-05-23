import React from "react";
import "../app.css";
import "./home.css";
import Hero from "./Hero";

function Home() {
  return (
    <section>
      <header className="home__header-container">
        <Hero />
      </header>
    </section>
  );
}

export default Home;
