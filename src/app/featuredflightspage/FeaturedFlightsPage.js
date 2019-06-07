import React from "react";
import "./featuredflightspage.css";
import PageWrapper from "../components/PageWrapper";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FeaturedFlightCard from "../components/FeaturedFlightCard";
import flights from "../components/Flights";
import logos from "../assets/images/logos";
import { toTitleCase } from "../utils";

class FeaturedFlightsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedRegion: "asia" };
  }

  regions = [
    "africa",
    "asia",
    "the caribbean",
    "central america",
    "europe",
    "north america",
    "oceania"
  ];

  handleRegion = region => e => {
    this.setState({
      selectedRegion: e.target.value
    });
  };

  filteredFlights = () => {
    let filteredByRegion = flights.filter(flight => {
      return flight.region === this.state.selectedRegion ? flight : null;
    });
    if (!(filteredByRegion.length < 1)) {
      return filteredByRegion.map((flight, i) => {
        return (
          <FeaturedFlightCard
            key={i}
            // toggleBookingEngine={toggleBookingEngine}
            flight={flight}
          />
        );
      });
    } else {
      let selectedRegion = toTitleCase(this.state.selectedRegion);
      return (
        <p className="font--large bold padding-20">
          {`Sorry, there are currently no specials for ${selectedRegion} at the moment.`}
        </p>
      );
    }
  };

  render() {
    let filteredFlights = this.filteredFlights();
    let selectedRegion = this.state.selectedRegion;
    let style = {
      width: "200px"
    };

    return (
      <PageWrapper
        title="Airfares & Featured Flights"
        description="Find exclusive airfares to destinations all around the world"
      >
        <div className="center column">
          <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
          <div className="temp padding-20">
            <TextField
              select
              label="Select Region"
              value={selectedRegion}
              style={style}
              onChange={this.handleRegion("region")}
            >
              {this.regions.map((region, i) => (
                <MenuItem key={i} value={region} style={style}>
                  {toTitleCase(region)}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div className="margin-top-50">
          <h1 className="center font--header primary-color bold">
            {toTitleCase(selectedRegion)}
          </h1>
          <div className="featuredflightspage-container center wrap">
            {filteredFlights}
          </div>
        </div>
        <div className="center margin-50">/ AIRLINE PARTNERS /</div>
      </PageWrapper>
    );
  }
}

export default FeaturedFlightsPage;
