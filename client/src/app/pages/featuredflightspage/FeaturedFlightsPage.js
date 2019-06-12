import React from "react";
import "./featuredflightspage.css";
import PageWrapper from "../../components/PageWrapper";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FeaturedFlightCard from "../../components/FeaturedFlightCard";
import flights from "../../components/Flights";
import logos from "../../assets/images/logos";
import backgrounds from "../../assets/images/bg";
import { toTitleCase } from "../../utils";

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
            clickBookingEngine={this.props.clickBookingEngine}
            flight={flight}
          />
        );
      });
    } else {
      let selectedRegion = toTitleCase(this.state.selectedRegion);
      return (
        <p className="font--large dark-grey bold padding-20">
          {`Sorry, there are currently no specials for ${selectedRegion} at the moment.`}
        </p>
      );
    }
  };

  render() {
    const filteredFlights = this.filteredFlights();
    const selectedRegion = this.state.selectedRegion;
    const style = {
      width: "200px"
    };

    return (
      <PageWrapper
        title="Airfares & Featured Flights"
        description="Find exclusive airfares to destinations all around the world"
        backgroundImage={backgrounds.featuredFlights_bg}
      >
        <div className="center column padding-20">
          <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
          <div className="padding-20">
            <TextField
              select
              label="Where are you going?"
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
        <h1 className="center font--header primary-color bold">
          {toTitleCase(selectedRegion)}
        </h1>
        <div className="featuredflightspage-container center wrap margin-bottom-50">
          {filteredFlights}
        </div>
        <div className="center margin-50">/ AIRLINE PARTNERS /</div>
      </PageWrapper>
    );
  }
}

export default FeaturedFlightsPage;
