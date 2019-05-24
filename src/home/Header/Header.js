import React from "react";
import "./header.css";
import logos from "../../assets/images/logos";
import icons from "../../assets/images/icons";
import HamburgerMenu from "../../components/HamburgerMenu";

class Header extends React.Component {
  render() {
    return (
      <div className="header middle">
        <img
          className="logo--xs"
          src={logos.mts_logo_full_white}
          alt="MTS Logo"
        />
        <div className="header__container--right">
          <img className="icon--xs" src={icons.phone_grey} alt="MTS Phone" />
          <a
            className="font--sml font--bold header__container--right__link"
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
