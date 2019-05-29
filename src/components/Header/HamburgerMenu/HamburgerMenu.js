import React from "react";
import Dialog from "../../Dialog";
import ServicesList from "../../ServicesList";
import DialogFooter from "../../DialogFooter/";
import "./hamburgermenu.css";

class HamburgerMenu extends React.Component {
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

  toggleHamburgerMenu = () => {
    return (
      <div className="button-padding" onClick={e => this.toggleClick(e)}>
        <div className={`bar ${this.state.open ? "bar-1--open" : "bar-1"}`} />
        <div className={`bar ${this.state.open ? "bar-2--open" : "bar-2"}`} />
        <div className={`bar ${this.state.open ? "bar-3--open" : "bar-3"}`} />
      </div>
    );
  };

  toggleMenu = () => {
    return (
      <div className={`menu box-shadow ${this.state.open ? "menu--open" : ""}`}>
        <Dialog onClick={this.toggleClick}>
          <div className="padding-10">
            <ServicesList />
          </div>
          <hr className="off-white" />
          <DialogFooter />
        </Dialog>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.toggleHamburgerMenu()}
        {this.toggleMenu()}
      </div>
    );
  }
}

export default HamburgerMenu;
