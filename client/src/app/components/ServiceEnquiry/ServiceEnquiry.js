import React from "react";
import "./serviceenquiry.css";
import SimpleEnquiryForm from "../Forms/SimpleEnquiryForm";
import logos from "../../assets/images/logos";

const ServiceEnquiry = props => {
  const { contactNumber, service } = props;

  return (
    <div className="hotelspage center column padding-20">
      <h1 className="font--large bold font--center">
        {`To make a booking or for more information on ${service.toLowerCase()}`}
      </h1>
      <a href={`tel:${contactNumber}`} className="padding-20 column">
        <h1 className="center font--large font--center font--no-wrap bold primary-color margin-none">
          {`Call us now on ${contactNumber}`}
        </h1>
      </a>
      <img
        src={logos.mts_logo}
        className="logo--medium margin-50"
        alt="MTS Logo"
      />
      <h1 className="font--center font--large bold">
        Tired of waiting in line?
      </h1>
      <p className="font--center margin-20">
        Skip the service queue and get an emailed copy of all your enquiry
        details. Simply fill in the form below.
      </p>
      <SimpleEnquiryForm />
    </div>
  );
};

export default ServiceEnquiry;
