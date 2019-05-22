import React from "react";
import HeaderMenu from "../HeaderMenu";
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

  handleClose = e => {
    e.preventDefault()
    this.setState({
      open: false
    })
  }

  toggleHamburgerMenu = () => {
    return (
      <div onClick={e => this.toggleClick(e)}>
        <div className={`hamburgermenu__bar ${this.state.open ? "hamburgermenu__bar--top--open" : "hamburgermenu__bar--top"}`} />
        <div className={`hamburgermenu__bar ${this.state.open ? "hamburgermenu__bar--middle--open" : "hamburgermenu__bar--middle"}`} />
        <div className={`hamburgermenu__bar ${this.state.open ? "hamburgermenu__bar--bottom--open" : "hamburgermenu__bar--bottom"}`} />
      </div>
    );
  };

  toggleHeaderMenu = () => {
    return (
      <div
        className={`hamburgermenu__headermenu ${this.state.open ? "hamburgermenu__headermenu--open" : null}`}
        // Pass as prop later for close button.
        onClick={e => this.handleClose(e)}
      >
        <HeaderMenu />
      </div>
    )
  }

  render() {
    return (
      <div>
        <div>
          {this.toggleHamburgerMenu()}
          {this.toggleHeaderMenu()}
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
