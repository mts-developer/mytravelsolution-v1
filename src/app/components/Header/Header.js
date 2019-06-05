import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logos from "../../assets/images/logos";
import icons from "../../assets/images/icons";
import services from "../Services";
import HamburgerMenu from "./HamburgerMenu";

class Header extends React.Component {
  render() {
    return (
      <div className="header space-between middle">
        <Link to="/">
          {" "}
          <img
            className="logo--medium"
            src={logos.mts_logo_full_white}
            alt="MTS Logo"
          />
        </Link>
        {/* Begin Tablet Only */}
        <div className="tablet responsive-width row">
          {services.map((service, i) => {
            return (
              <Link key={i} className="font--small white" to={service["url"]}>
                <p className="margin-list">{service["shortLabel"]}</p>
              </Link>
            );
          })}
        </div>
        {/* End Tablet Only */}
        <div className="row middle">
          <a className="font--medium white" href="tel:0393146957">
            <img
              className="icon--small button-padding"
              src={icons.phone_white_svg}
              alt="MTS Phone"
            />
          </a>
          <p className="desktop font--small white bold">03 9314 6957</p>
          <HamburgerMenu />
        </div>
      </div>
    );
  }
}

export default Header;
