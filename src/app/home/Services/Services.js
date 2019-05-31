import React from "react";
import "./services.css";
import ServicesList from "../../components/ServicesList";
import logos from "../../assets/images/logos";

const Services = () => {
  return (
    <div className="services angled-top">
      <div className="responsive-width responsive-height">
        <div className="row middle padding-20">
          <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
          <div className="column label-spacing-left">
            <h1 className="font--header bold primary-color margin-none">
              Our Services
            </h1>
            <p className="font--medium dark-grey">
              Tailor your holiday with our premium services
            </p>
          </div>
        </div>
        <div className="padding-20">
          <ServicesList theme="dark-grey" />
        </div>
      </div>
    </div>
  );
};

export default Services;
