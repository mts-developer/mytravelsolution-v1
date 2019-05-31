import React from "react";
import "./footer.css";
import ContactUs from "./ContactUs";
import Sitemap from "./Sitemap";
import logos from "../../assets/images/logos";
import icons from "../../assets/images/icons";

const Footer = () => {
  return (
    <div className="footer angled-top">
      <div className="responsive-width footer-container space-between padding-20">
        <ContactUs
          address="336 Somerville Rd, Kingsville VIC 3012"
          addressUrl="https://goo.gl/maps/ZtsRxAfE5AKscYe68"
          contactNumber="03 9314 6957"
          email="bookings@mytravelsolution.com.au"
        />
        <div className="center">
          <Sitemap
            facebookLabel="Like Us"
            facebookIcon={icons.fb_white_svg}
            facebookUrl="fb://page/mytravelsolutionau/"
          />
        </div>
      </div>
      <div className="center row middle">
        <img
          className="logo--small"
          src={logos.afta_white_logo}
          alt="MTS Logo"
        />
        <hr className="vertical-rule margin-10" />
        <img
          className="logo--small"
          src={logos.atas_white_logo}
          alt="MTS Alt Logo"
        />
      </div>
      <div className="center padding-20">
        <p className="font--small white">© 2019 MY TRAVEL SOLUTION</p>
      </div>
    </div>
  );
};

export default Footer;
