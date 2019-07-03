import React from "react";
import { Link } from "react-router-dom";
import "./sitemap.css";
import quickLinks from "../../QuickLinks";
import services from "../../Services";

const Sitemap = props => {
  const { facebookLabel, facebookIcon, facebookUrl } = props;

  return (
    <div className="sitemap grid-columns-2 margin-top-20">
      <div className="dark-grey">
        <h2 className="font--medium bold dark-grey padding-10">QuickLinks</h2>
        {quickLinks.map((quickLink, i) => {
          return (
            <ul key={i}>
              <Link
                className="font--small dark-grey padding-10"
                to={quickLink["url"]}
              >
                {quickLink["label"]}
              </Link>
            </ul>
          );
        })}
        <a href={facebookUrl} className="middle button-padding">
          <p className="font--large center bold">{facebookLabel}</p>
          <img
            className="icon--medium"
            src={facebookIcon}
            alt={facebookLabel}
          />
        </a>
      </div>
      <div>
        <h2 className="font--medium bold dark-grey padding-10">Services</h2>
        {services.map((service, i) => {
          return (
            <ul key={i}>
              <Link
                className="font--small dark-grey padding-10"
                to={service["url"]}
              >
                {service["label"]}
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Sitemap;
