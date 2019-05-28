import React from "react";
import "./footer.css";
import ContactUs from "./ContactUs";

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
    </div>
  );
};

export default Footer;
