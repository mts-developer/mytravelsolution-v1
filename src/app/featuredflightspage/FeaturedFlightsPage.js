import React from "react";
import "./featuredflightspage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

class FeaturedFlightsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="featuredflights angled-bottom">
          <div className="featuredflights-container padding-20">
            <Header />
            <div className="responsive-width">
              <div className="hero-title margin-none">
                <h1 className="white font--title bold">
                  Airfares & Featured Flights
                </h1>
                <h2 className="white font--large thin">
                  Find exclusive airfares to destinations all around the world
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="responsive-height">
          <div className="responsive-height center column">
            <h1>/ CONTENT /</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FeaturedFlightsPage;
