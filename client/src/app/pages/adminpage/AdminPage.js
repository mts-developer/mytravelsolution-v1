import React from "react";
import "./adminpage.css";
import DataTable from "./DataTable/";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { toTitleCase } from "../../utils/";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", region: "" };
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

  handleChange = name => e => {
    this.setState({
      ...this.state,
      [name]: e.target.value
    });
  };

  render() {
    const { name, region } = this.state;
    const handleChange = this.handleChange;
    const style = {
      width: "500px"
    };
    return (
      <div className="adminpage">
        <h1 className="font--title primary-color bold center">
          Administration Dashboard
        </h1>
        <div className="adminpage-container column padding-20">
          <DataTable />
          <h1 className="font--large dark-grey bold">Edit Flights</h1>
          <div className="margin-20">
            <TextField
              id="name"
              label="Name"
              value={name}
              onChange={handleChange("name")}
              helperText="Name of featured special"
              style={style}
            />
          </div>
          <div className="margin-20">
            <TextField
              select
              label="Select Region"
              value={region}
              onChange={handleChange("region")}
              style={style}
            >
              {this.regions.map((location, i) => (
                <MenuItem key={i} value={location} style={style}>
                  {toTitleCase(location)}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
