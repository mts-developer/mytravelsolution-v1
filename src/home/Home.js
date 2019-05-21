import React from "react";
import "../app.css";
import "./home.css";
import Header from "./Header";

function Home() {
  return (
    <section className="wrapper">
      <header className="header">
        <Header />
        <h1>Welcome to My Travel Solution</h1>
      </header>
    </section>
  );
}

export default Home;
