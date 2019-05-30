import React from "react";
import "./visa.css";
import LinkButton from "../../components/Buttons/LinkButton";
import logos from "../../assets/images/logos";

const Visa = () => {
  return (
    <div className="visa padding-20 column">
      <h1 className="font--header bold primary-color">Need a Travel Visa?</h1>
      <div className="padding-20 center column">
        <p className="dark-grey">
          VisaLink is a fast, easy, and secure solution for your international
          travel document needs.
        </p>
        <h1 className="font--large bold dark-grey">
          The fastest way to get a visa.
        </h1>
        <div className="margin-top-50">
          <LinkButton
            label="Enquire Now"
            url="https://visalink.com.au/?login=mytravelsolution"
            width="100px"
            color="primary"
          />
        </div>
        <div className="row padding-50">
          <img
            className="logo--small margin-20"
            src={logos.visalink_logo}
            alt="Visalink"
          />
          <img
            className="logo--small margin-20"
            src={logos.mts_logo_full}
            alt="Visalink"
          />
        </div>
      </div>
    </div>
  );
};

export default Visa;
