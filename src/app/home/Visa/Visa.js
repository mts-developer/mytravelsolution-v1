import React from "react";
import "./visa.css";
import LinkButton from "../../components/Buttons/LinkButton";
import logos from "../../assets/images/logos";

const Visa = () => {
  return (
    <div className="visa responsive-width column padding-top-50">
      <h1 className="font--header bold primary-color margin-none">
        Need a Travel Visa?
      </h1>
      <div className="center column">
        <p className="font--medium dark-grey">
          VisaLink is the global leader in travel visas.
        </p>
        <p className="font--medium dark-grey padding-20">
          Millions of international travellers have trusted VisaLink to secure
          their business visas or tourist visas.
        </p>
        <div className="row margin-top-50">
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
        <h1 className="font--large bold dark-grey">
          The fastest way to get a visa.
        </h1>
        <div className="padding-20 padding-top-50">
          <LinkButton
            label="Enquire Now"
            url="https://visalink.com.au/?login=mytravelsolution"
            width="100px"
            color="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Visa;
