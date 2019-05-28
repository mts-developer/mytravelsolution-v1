import React from "react";
import "./footer.css";
import ContactUs from "./ContactUs";
import Sitemap from "./Sitemap";
import logos from "../../assets/images/logos";
import icons from "../../assets/images/icons";

const Footer = () => {
  return (
    <div className="footer angled-top">
      <div className="padding-20">
        <ContactUs
          address="336 Somerville Rd, Kingsville VIC 3012"
          addressUrl="https://goo.gl/maps/ZtsRxAfE5AKscYe68"
          contactNumber="03 9314 6957"
          email="bookings@mytravelsolution.com.au"
        />
      </div>
      <div className="center row middle padding-20">
        <img
          className="logo--small"
          src={logos.mts_logo_full_white}
          alt="MTS Logo"
        />
        <hr className="vertical-rule margin-10" />
        <img
          className="logo--small"
          src={logos.mts_alt_logo}
          alt="MTS Alt Logo"
        />
      </div>
      <div className="center row middle">
        <h1 className="font--large center white bold">Connect with us</h1>
        <img
          className="icon--medium"
          src={icons.fb_white_svg}
          alt="MTS Alt Logo"
        />
      </div>
      <div className="padding-20">
        <Sitemap />
      </div>
    </div>
  );
};

export default Footer;
