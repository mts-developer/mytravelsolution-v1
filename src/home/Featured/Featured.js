import React from "react";
import "./featured.css";
import FeaturedFlightCard from "../../components/FeaturedFlightCard";
import LinkButton from "../../components/Buttons/LinkButton";
import Dialog from "../../components/Dialog";
import logos from "../../assets/images/logos";

class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  toggleClick = e => {
    e.preventDefault();
    this.setState({
      open: !this.state.open
    });
  };

  toggleDialog = () => {
    return (
      <div
        className={`dialog box-shadow ${this.state.open ? "dialog--open" : ""}`}
      >
        <Dialog action={this.toggleClick}>
          <div className="center padding-20">
            / Booking Engine / {this.state.origin}
          </div>
        </Dialog>
      </div>
    );
  };

  render() {
    return (
      <div className="featured padding-20">
        {this.toggleDialog()}
        <div className="column center">
          <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
          <h1 className="font--large bold primary-color">Featured Flights</h1>
        </div>
        <div className="column center">
          <FeaturedFlightCard action={this.toggleClick} />
          <FeaturedFlightCard action={this.toggleClick} />
          <FeaturedFlightCard action={this.toggleClick} />
        </div>
        <div className="more-deals-button center">
          <LinkButton label="View More" />
        </div>
      </div>
    );
  }
}

export default Featured;
