import React from "react";
import "./services.css";
import ServicesList from "../../components/ServicesList";
import Angle from "../../components/Angle";
import logos from "../../assets/images/logos";
import colors from "../../themes/colors";

const Services = () => {
  return (
    <div className="services angle-offset">
      <div className="responsive-width padding-20">
        <div className="row middle">
          <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
          <div className="column label-spacing-left">
            <h1 className="font--header bold primary-color margin-none">
              Our Services
            </h1>
            <p className="font--medium dark-grey">
              Tailor your holiday with My Travel Solution's premium services
            </p>
          </div>
        </div>
        <div className="padding-20">
          <ServicesList theme="dark-grey" />
        </div>
      </div>
      <Angle top fill={colors.offWhite} />
    </div>
  );
};

export default Services;
