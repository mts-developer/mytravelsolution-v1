import React from "react";
import "./services.css";
import ServicesList from "../../components/ServicesList";

const Services = () => {
  return (
    <div className="services angled-top">
      <div className="padding-20">
        <h1 className="font--large bold white">Our Services</h1>
        <p className="font--small white">
          Tailor your holiday with our premium services
        </p>
        <div className="padding-20">
          <ServicesList theme="light" />
        </div>
      </div>
    </div>
  );
};

export default Services;
