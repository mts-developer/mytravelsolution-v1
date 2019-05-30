import React from "react";
import "./contactus.css";

import icons from "../../../assets/images/icons";
import LinkButton from "../../../components/Buttons/LinkButton";

const ContactUs = props => {
  let address = props.address;
  let addressUrl = props.addressUrl;
  let contactNumber = props.contactNumber;
  let email = props.email;

  return (
    <div className="contactus margin-20">
      <h1 className="font--header white bold">Call us today</h1>
      <a href={addressUrl} className="row margin-top-20 middle">
        <img
          className="icon--small margin-right-10"
          src={icons.marker_white_svg}
          alt="Marker"
        />
        <p className="font-small white">{address}</p>
      </a>
      <a href={`tel:${contactNumber}`} className="row margin-top-20 middle">
        <img
          className="icon--small margin-right-10"
          src={icons.phone_white_svg}
          alt="Marker"
        />
        <p className="font-small white">{contactNumber}</p>
      </a>
      <a href={`mailto:${email}`} className="row margin-top-20 middle">
        <img
          className="icon--small margin-right-10"
          src={icons.mail_white_svg}
          alt="Marker"
        />
        <p className="font-small white">{email}</p>
      </a>
      <div className="margin-top-50">
        <LinkButton
          label="Call Us Now"
          width="90px"
          url={`tel:${contactNumber}`}
          color="primary"
        />
      </div>
    </div>
  );
};

export default ContactUs;
