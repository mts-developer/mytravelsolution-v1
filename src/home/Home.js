import React from "react";
import "../App.css";
import "./home.css";
import Hero from "./Hero";
import Featured from "./Featured";
import Services from "./Services";
import Visa from "./Visa";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Dialog from "../components/Dialog";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  toggleClick = e => {
    e.preventDefault();
    this.setState({
      open: !this.state.open
    });
  };

  toggleDialog = () => {
    return (
      <div
        className={`dialog box-shadow ${this.state.open ? "dialog--open" : ""}`}
      >
        <Dialog onClick={this.toggleClick}>
          <div className="center padding-20">/ Booking Engine /</div>
        </Dialog>
      </div>
    );
  };

  render() {
    return (
      <div className="home">
        {this.toggleDialog()}
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
}

export default Home;
