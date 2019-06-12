import React from "react";
import "./subscribe.css";
import Input from "@material-ui/core/TextField";

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="subscribe center column">
        <h1 className="font--header primary-color bold margin-none">
          Never miss a deal
        </h1>
        <p className="font--medium dark-grey">Subscribe to our mailing list!</p>
        <div className="padding-20">
          <Input
            className="textfield-width"
            label="Email address"
            InputProps={{
              "aria-label": "Email"
            }}
          />
        </div>
      </div>
    );
  }
}

export default Subscribe;
