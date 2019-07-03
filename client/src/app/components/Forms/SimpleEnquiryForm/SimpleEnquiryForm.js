import React from "react";
import "./simpleenquiryform.css";
import ActionButton from "../../../components/Buttons/ActionButton";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class SimpleEnquiryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fullName: "",
      contact: "",
      destination: "",
      travelDates: {
        from: "Not Specified",
        to: "Not Specified"
      },
      replyPreference: {
        email: true,
        contact: false
      },
      comments: ""
    };
  }

  handleChange = name => e => {
    this.setState({
      ...this.state,
      [name]: e.target.value
    });
  };

  handleTravelDates = name => e => {
    this.setState({
      travelDates: { ...this.state.travelDates, [name]: e.target.value }
    });
  };

  handleReplyPreference = name => e => {
    this.setState({
      replyPreference: {
        ...this.state.replyPreference,
        [name]: e.target.checked
      }
    });
  };

  render() {
    const {
      email,
      fullName,
      contact,
      destination,
      travelDates,
      replyPreference,
      comments
    } = this.state;
    const handleChange = this.handleChange;
    const handleTravelDates = this.handleTravelDates;
    const handleReplyPreference = this.handleReplyPreference;
    const style = {
      marginTop: "20px",
      checkBox: {
        margin: "10px",
        transform: "translateY(2px)"
      },
      datePicker: {
        minWidth: "250px",
        maxWidth: "300px",
        margin: "10px 20px"
      },
      comments: {
        whiteSpace: "pre"
      }
    };

    return (
      <div className="simpleenquiryform">
        <TextField
          id="email"
          label="Email Address *"
          value={email}
          onChange={handleChange("email")}
          style={style}
          fullWidth
        />
        <TextField
          id="fullName"
          label="Full Name"
          value={fullName}
          onChange={handleChange("fullName")}
          style={style}
          fullWidth
        />
        <TextField
          id="contact"
          label="Contact Number"
          value={contact}
          onChange={handleChange("contact")}
          style={style}
          fullWidth
        />
        <TextField
          id="destination"
          label="What city will you travelling to?"
          value={destination}
          onChange={handleChange("destination")}
          style={style}
          fullWidth
        />
        <div className="padding-top-50">
          <p className="bold">What dates will you be travelling between?</p>
          <div className="wrap space-between">
            <TextField
              id="travelDates"
              type="date"
              onChange={handleTravelDates("from")}
              helperText="Date From"
              style={style.datePicker}
              fullWidth
            />
            <TextField
              id="travelDates"
              type="date"
              onChange={handleTravelDates("to")}
              helperText="Date To"
              style={style.datePicker}
              fullWidth
            />
          </div>
        </div>
        <p className="padding-top-50 bold">
          How would you like us to contact you?
        </p>
        <div className="column padding-20">
          <FormControlLabel
            control={
              <Checkbox
                checked={replyPreference.email}
                onChange={handleReplyPreference("email")}
                style={style.checkBox}
              />
            }
            label={`Send a reply email ${email !== "" ? `to ${email}` : ""}`}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={replyPreference.contact}
                onChange={handleReplyPreference("contact")}
                style={{ ...style.checkBox }}
              />
            }
            label={`Contact ${contact}`}
          />
        </div>
        <TextField
          id="comments"
          label="What's your enquiry about?"
          multiline
          rowsMax="10"
          value={comments}
          onChange={handleChange("comments")}
          margin="normal"
          style={style.comments}
          fullWidth
        />
        <div className="padding-top-20 space-between">
          <p className="font--small bold light-grey">
            Fields marked with * are required
          </p>
          <a
            href={`mailto:bookings@mytravelsolution.com.au?cc=${email}&subject=MTS%20Email%20Enquiry%20Sample&body=Email%20Address%3A%0A${email}%0A%0AFull%20Name%3A%0A${fullName}%0A%0AContact%20Number%3A%0A${contact}%0A%0ATravelling%20To%3A%0A${destination}%0A%0ATravel%20Dates%3A%0A${
              travelDates.from
            }%20to%20${
              travelDates.to
            }%0A%0AContact%20Preference%3A%0AEmail%3A%20${
              replyPreference.email
            }%0AContact%3A%20${
              replyPreference.contact
            }%0A%0ARemarks%3A%0A${comments}`}
          >
            <ActionButton label="Send" width="80px" />
          </a>
        </div>
      </div>
    );
  }
}

export default SimpleEnquiryForm;
