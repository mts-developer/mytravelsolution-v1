import React from "react";
import "./services.css";
import ServicesList from "../../components/ServicesList";
import logos from "../../assets/images/logos";

const Services = () => {
  return (
    <div className="services angled-top">
      <div className="padding-20">
        <div className="row middle">
          <img
            className="logo--medium padding-20"
            src={logos.mts_logo}
            alt="MTS Logo"
          />
          <div className="column">
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
