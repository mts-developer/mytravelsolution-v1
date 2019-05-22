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

  toggleHamburgerMenu = () => {
    return (
      <div>
        <div className={`hamburgermenu__bar ${this.state.open ? "hamburgermenu__bar--top--open" : "hamburgermenu__bar--top"}`} />
        <div className={`hamburgermenu__bar ${this.state.open ? "hamburgermenu__bar--middle--open" : "hamburgermenu__bar--middle"}`} />
        <div className={`hamburgermenu__bar ${this.state.open ? "hamburgermenu__bar--bottom--open" : "hamburgermenu__bar--bottom"}`} />
      </div>
    );
  };

  render() {
    return (
      <div>
        <div onClick={e => this.toggleClick(e)}>
          {this.toggleHamburgerMenu()}
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
