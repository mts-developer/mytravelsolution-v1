import React from "react";
import "./hero.css";
import Header from "../../components/Header";
import Dialog from "../../components/Dialog";
import ActionButton from "../../components/Buttons/ActionButton";

class Hero extends React.Component {
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
        <Dialog onClick={this.toggleClick}>
          <div className="center padding-20">/ Booking Engine /</div>
        </Dialog>
      </div>
    );
  };

  render() {
    return (
      <div className="hero hero-background hero-background--angle">
        <div className="hero-background--reset-angle">
          {this.toggleDialog()}
          <Header />
          <div className="hero-title">
            <h1 className="margin-none white font--header">
              Your journey
              <br />
              begins
            </h1>
            <h2 className="white font--large thin">Discover the world today</h2>
          </div>
          <div className="column">
            <ActionButton
              onClick={e => this.toggleClick(e)}
              label="Book Now"
              width="80px"
            />
            <p className="hero__hours-text white font--small">
              Or call our office 7 days a week
              <br />
              from 9-5pm.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
