import React from "react";
import "./header.css";
import logos from "../../assets/images/logos";
import HamburgerMenu from "../../components/HamburgerMenu";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div>
          <img
            className="logo--xs logo"
            src={logos.mts_logo_full_white}
            alt="MTS Logo"
          />
        </div>
        <div className="header__container--right">
          <a
            className="font--sml font--bold header__contact--white"
            href="tel:0393146957"
          >
            03 9314 6957
          </a>
          <HamburgerMenu />
        </div>
      </div>
    );
  }
}

export default Header;
