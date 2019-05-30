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
    this.state = { open: false };
  }

  componentDidMount() {
    // this.setTimeout(5);
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
        <Dialog action={this.toggleClick}>
          <div className="center padding-20">
            <Subscribe />
          </div>
        </Dialog>
      </div>
    );
  };

  showDialog = () => {
    this.setState({
      open: true
    });
  };

  setTimeout = seconds => {
    setTimeout(() => this.showDialog(), seconds * 1000);
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
