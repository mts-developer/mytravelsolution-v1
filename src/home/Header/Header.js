import React from "react";
import "./header.css";
import logos from "../../assets/images/logos";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <img
            className="logo--sml logo"
            src={logos.mts_logo_full_white}
            alt="MTS Logo"
          />
        </div>
        <div className="container--right">
          <p className="font-size--sml font--bold contact">03 9314 6957</p>
          <div>menu</div>
        </div>
      </div>
    );
  }
}

export default Header;
