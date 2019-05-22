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
    return this.state.open ? (
      <div>
        <div>
          <div className={"hamburgermenu__bar hamburgermenu__bar--top--open"} />
          <div
            className={"hamburgermenu__bar hamburgermenu__bar--middle--open"}
          />
          <div
            className={"hamburgermenu__bar hamburgermenu__bar--bottom--open"}
          />
        </div>
        <div>
          <HeaderMenu open={this.state.open} />
        </div>
      </div>
    ) : (
      <div>
        <div className={"hamburgermenu__bar hamburgermenu__bar--top"} />
        <div className={"hamburgermenu__bar"} />
        <div className={"hamburgermenu__bar hamburgermenu__bar--bottom"} />
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
