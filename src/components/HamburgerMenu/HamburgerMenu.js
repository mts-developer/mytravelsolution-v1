import React from "react";
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
        <div className={"hamburgermenu__bar hamburgermenu__bar--top--open"} />
        <div
          className={"hamburgermenu__bar hamburgermenu__bar--middle--open"}
        />
        <div
          className={"hamburgermenu__bar hamburgermenu__bar--bottom--open"}
        />
      </div>
    ) : (
      <div>
        <div className={"hamburgermenu__bar hamburgermenu__bar--top"} />
        <div className={"hamburgermenu__bar"} />
        <div className={"hamburgermenu__bar hamburgermenu__bar--bottom"} />
      </div>
    );
  };

  toggleMenu = () => {
    return this.state.open ? (
      <div
        onClick={e => this.toggleClick(e)}
        className="listmenu-container listmenu-container--open"
      >
        Hello
      </div>
    ) : (
      <div className="listmenu-container">Hello</div>
    );
  };

  render() {
    return (
      <div>
        <div onClick={e => this.toggleClick(e)}>
          {this.toggleHamburgerMenu()}
        </div>
        {this.toggleMenu()}
      </div>
    );
  }
}

export default HamburgerMenu;
