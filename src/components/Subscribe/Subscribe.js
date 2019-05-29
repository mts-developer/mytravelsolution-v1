import React from "react";
import "./subscribe.css";

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="subscribe center column">
        <h1 className="font--large primary-color">Never miss a deal</h1>
        <p className="font--medium dark-grey">Subscribe to our mailing list!</p>
      </div>
    );
  }
}

export default Subscribe;
