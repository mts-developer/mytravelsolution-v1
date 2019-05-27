import React from "react";
import "./header.css";
import logos from "../../assets/images/logos";
import icons from "../../assets/images/icons";
import HamburgerMenu from "./HamburgerMenu";

class Header extends React.Component {
  render() {
    return (
      <div className="header top">
        <div className="header-left">
          <img
            className="logo--medium"
            src={logos.mts_logo_full_white}
            alt="MTS Logo"
          />
        </div>
        <div className="header-right">
          <a className="font--medium white" href="tel:0393146957">
            <img
              className="icon--medium button-padding"
              src={icons.phone_white_svg}
              alt="MTS Phone"
            />
          </a>
          <HamburgerMenu />
        </div>
      </div>
    );
  }
}

export default Header;
