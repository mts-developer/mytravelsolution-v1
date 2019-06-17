import React from "react";
import "./simpleenquiryform.css";
import ActionButton from "../../../components/Buttons/ActionButton";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class SimpleEnquiryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: "email" };
  }

  render() {
    const { checked } = this.state;
    const style = {
      marginTop: "20px",
      checkBox: {
        margin: "10px",
        transform: "translateY(2px)"
      }
    };
    return (
      <div className="simpleenquiryform padding-20">
        <p className="font--small font--center bold">
          Fields marked with * are required
        </p>
        <TextField id="email" label="Email Address *" fullWidth style={style} />
        <TextField id="fullname" label="Full Name" fullWidth style={style} />
        <TextField
          id="contact"
          label="Contact Number"
          fullWidth
          style={style}
        />
        <TextField
          id="destination"
          label="Where are you travelling to?"
          fullWidth
          style={style}
        />
        <div className="enquirydate padding-20" style={style}>
          <p className="bold">What dates will you be travelling between?</p>
          <TextField
            id="datefrom"
            type="date"
            fullWidth
            helperText="Date From"
            style={style}
          />
          <TextField
            id="datefrom"
            type="date"
            fullWidth
            helperText="Date To"
            style={style}
          />
        </div>
        <p className="padding-top-20 bold">
          How would you like us to contact you?
        </p>
        <div className="column padding-20">
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.email}
                // onChange={handleCheckboxChange("returnTrip")}
                value="email"
                style={style.checkBox}
              />
            }
            label="Email"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.contact}
                // onChange={handleCheckboxChange("returnTrip")}
                value="contact"
                style={{ ...style.checkBox }}
              />
            }
            label="Contact Number"
          />
        </div>
        <TextField
          id="standard-multiline-flexible"
          label="Your Message"
          multiline
          rowsMax="10"
          // value={values.multiline}
          // onChange={handleChange("multiline")}
          margin="normal"
          fullWidth
        />
        <div className="padding-top-20 right">
          <ActionButton label="Send" width="80px" />
        </div>
      </div>
    );
  }
}

export default SimpleEnquiryForm;
