import React from "react";
import "./featuredflightspage.css";
import PageWrapper from "../components/PageWrapper";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/Textfield";
import FeaturedFlightCard from "../components/FeaturedFlightCard";
import flights from "../components/Flights";
import logos from "../assets/images/logos";

class FeaturedFlightsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedRegion: "Asia" };
  }

  regions = [
    "Africa",
    "Asia",
    "Caribbean",
    "Central America",
    "Europe",
    "North America",
    "Oceania"
  ];

  handleRegion = region => e => {
    this.setState({
      selectedRegion: e.target.value
    });
  };

  render() {
    const selectedRegion = this.state.selectedRegion;

    const style = {
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
                  {region}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div className="margin-top-50">
          <h1 className="center font--header primary-color bold">
            {selectedRegion}
          </h1>
          <div className="featuredflightspage-container center wrap">
            {/* <FeaturedFlightCard />
            <FeaturedFlightCard />
            <FeaturedFlightCard />
            <FeaturedFlightCard />
            <FeaturedFlightCard /> */}
          </div>
        </div>
        <div className="center margin-50">/ AIRLINE PARTNERS /</div>
      </PageWrapper>
    );
  }
}

export default FeaturedFlightsPage;
