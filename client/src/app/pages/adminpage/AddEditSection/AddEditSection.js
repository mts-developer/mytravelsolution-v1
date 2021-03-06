import React from "react";
import "./addeditsection.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import ActionButton from "../../../components/Buttons/ActionButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { toTitleCase } from "../../../utils/";

class AddEditSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expiry: "",
      name: "",
      region: "",
      origin: "",
      destination: "",
      returnTrip: true,
      price: 0,
      travelPeriods: [],
      remarks: []
    };

    this.baseState = this.state;
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

  handleClear = e => {
    e.preventDefault();
    this.setState(this.baseState);
  };

  handleChange = name => e => {
    this.setState({
      ...this.state,
      [name]: e.target.value
    });
  };

  handleCheckboxChange = name => e => {
    this.setState({
      ...this.state,
      [name]: e.target.checked
    });
  };

  // Begin TO DO: Refactor this with form handler

  travelPeriod = {};

  pushTravelPeriod = (e, travelPeriod) => {
    e.preventDefault();
    const travelPeriods = this.state.travelPeriods.concat(travelPeriod);
    this.setState({ travelPeriods });
  };

  handleTravelPeriod = name => e => {
    this.travelPeriod = {
      ...this.travelPeriod,
      [name]: e.target.value
    };
  };

  remark = "";

  pushRemark = (e, remark) => {
    e.preventDefault();
    this.setState({
      remarks: [...this.state.remarks, remark]
    });
  };

  handleRemark = name => e => {
    this.remark = e.target.value;
  };

  // End TO DO

  dbAddItem = e => {
    e.preventDefault();
    fetch("http://localhost:7000/flights", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        region: this.state.region
      })
    })
      .then(res => res.json())
      .then(data => {
        return Array.isArray(data)
          ? this.props.addFlight(data[0])
          : console.log(data.dbError);
      })
      .catch(err => console.log(err));
  };

  render() {
    const {
      expiry,
      name,
      region,
      origin,
      destination,
      returnTrip,
      price,
      travelPeriods,
      remarks
    } = this.state;
    const handleChange = this.handleChange;
    const handleCheckboxChange = this.handleCheckboxChange;
    const handleTravelPeriod = this.handleTravelPeriod;
    const pushTravelPeriod = this.pushTravelPeriod;
    const handleRemark = this.handleRemark;
    const pushRemark = this.pushRemark;
    const style = {
      width: "400px",
      checkBox: {
        margin: "10px"
      }
    };

    return (
      <div>
        <h1 className="font--large bold">Add/Edit Featured Flight</h1>
        <div className="margin-20">
          <TextField
            id="expiry"
            type="date"
            value={expiry}
            onChange={handleChange("expiry")}
            helperText="Expiry date of featured special"
            style={style}
          />
        </div>
        <div className="margin-20">
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={handleChange("name")}
            helperText="Name of featured special. (Character limit: 20)"
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
        <div className="margin-20">
          <TextField
            id="origin"
            label="Origin"
            value={origin}
            onChange={handleChange("origin")}
            helperText="IATA airport code of origin. (Example: MEL)"
            style={style}
          />
        </div>
        <div className="margin-20">
          <TextField
            id="destination"
            label="Destination"
            value={destination}
            onChange={handleChange("destination")}
            helperText="IATA airport code of destination. (Example: MNL)"
            style={style}
          />
        </div>
        <div className="margin-20">
          <FormControlLabel
            control={
              <Checkbox
                checked={returnTrip}
                onChange={handleCheckboxChange("returnTrip")}
                value="returnTrip"
                style={{ margin: "10px" }}
              />
            }
            label="Return Trip?"
          />
        </div>
        <div className="margin-20">
          <TextField
            id="price"
            label="Price"
            value={price}
            onChange={handleChange("price")}
            helperText="Featured price (Whole number, Example: $899)"
            style={style}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
          />
        </div>
        <h1 className="margin-20 font--large bold">Travel Periods</h1>
        <div className="traveldates row">
          <div className="margin-20">
            <div className="padding-20">
              <TextField
                id="travelPeriods"
                type="date"
                onChange={handleTravelPeriod("from")}
                helperText="Travel period start date"
                style={style}
              />
            </div>
            <div className="padding-20">
              <TextField
                id="travelPeriods"
                type="date"
                onChange={handleTravelPeriod("to")}
                helperText="Travel period end date"
                style={style}
              />
              <div className="margin-top-20">
                <ActionButton
                  action={e => pushTravelPeriod(e, this.travelPeriod)}
                  label="Add Travel Period"
                  width="150px"
                  color="secondary"
                />
              </div>
            </div>
          </div>
          <div className="traveldatespreview">
            <ul className="padding-20 row wrap">
              {travelPeriods.map((travelPeriod, i) => {
                return (
                  <li key={i} className="margin-20">
                    <p className="bold">{`Travel Period ${i + 1}`}</p>
                    <p className="font--small">{`From: ${
                      travelPeriod.from
                    }`}</p>
                    <p className="font--small">{`To: ${travelPeriod.to}`}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="remarks row">
          <div className="padding-20">
            <h1 className="font--large bold">Remarks</h1>
            <p className="font--small">
              Remarks are additional details you can add to the featured flight.
            </p>
            <p className="font--small">
              Only 3 remarks can be added per featured flight.
            </p>
            <div className="padding-20">
              <TextField
                id="remarks"
                label="Remark"
                onChange={handleRemark("remark")}
                helperText="Example: Subject to availability (Character limit: 28)"
                style={style}
              />
            </div>
            <div className="margin-top-20">
              <ActionButton
                action={e => pushRemark(e, this.remark)}
                label="Add Remark"
                width="100px"
                color="secondary"
              />
            </div>
          </div>
          <div className="remarkspreview">
            <ul className="padding-20 column wrap">
              {remarks.map((remark, i) => {
                return (
                  <li key={i} className="padding-10">
                    <p className="bold">{`Remark ${i + 1}`}</p>
                    <p className="font--medium ">{remark}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="row space-between">
          <div className="margin-top-50">
            <ActionButton
              action={e => this.handleClear(e)}
              label="Clear"
              width="100px"
            />
          </div>
          <div className="margin-top-50">
            <ActionButton
              action={e => this.dbAddItem(e)}
              label="Add"
              width="100px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddEditSection;
