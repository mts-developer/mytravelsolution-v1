import React from "react";
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
    this.state = { openSubscribe: false, openBookingEngine: false };
  }

  componentDidMount() {
    // this.setTimeout(5);
  }

  clickBookingEngine = e => {
    e.preventDefault();
    this.setState({
      openBookingEngine: !this.state.openBookingEngine
    });
  };

  toggleBookingEngine = () => {
    return (
      <Dialog
        action={this.clickBookingEngine}
        open={this.state.openBookingEngine}
      >
        <div className="center padding-20">/ Sabre Booking Engine /</div>
      </Dialog>
    );
  };

  clickSubscribe = e => {
    e.preventDefault();
    this.setState({
      openSubscribe: !this.state.openSubscribe
    });
  };

  toggleSubscribeDialog = () => {
    return (
      <Dialog action={this.clickSubscribe} open={this.state.openSubscribe}>
        <div className="center padding-20">
          <Subscribe />
        </div>
      </Dialog>
    );
  };

  showSubscribe = () => {
    this.setState({
      openSubscribe: true
    });
  };

  setTimeout = seconds => {
    setTimeout(() => this.showSubscribe(), seconds * 1000);
  };

  render() {
    return (
      <div className="home">
        {this.toggleSubscribeDialog()}
        {this.toggleBookingEngine()}
        <section className="hero-section">
          <Hero toggleBookingEngine={this.clickBookingEngine} />
        </section>
        <section className="featured-section">
          <Featured toggleBookingEngine={this.clickBookingEngine} />
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
