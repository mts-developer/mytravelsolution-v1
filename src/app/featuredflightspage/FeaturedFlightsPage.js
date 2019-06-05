import React from "react";
import "./featuredflightspage.css";
import PageWrapper from "../components/PageWrapper";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/Textfield";
import logos from "../assets/images/logos";

class FeaturedFlightsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const regions = [
      "Africa",
      "Asia",
      "Caribbean",
      "Central America",
      "Europe",
      "North America",
      "Oceania"
    ];

    const style = {
      width: "200px"
    };

    return (
      <PageWrapper
        title="Airfares & Featured Flights"
        description="Find exclusive airfares to destinations all around the world"
      >
        <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
        <div className="padding-20">
          <TextField select label="Region" value="Asia" style={style}>
            {regions.map((region, i) => (
              <MenuItem key={i} value={region} style={style}>
                {region}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </PageWrapper>
    );
  }
}

export default FeaturedFlightsPage;
