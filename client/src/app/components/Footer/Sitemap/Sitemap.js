import React from "react";
import { Link } from "react-router-dom";
import "./sitemap.css";
import quickLinks from "../../QuickLinks";
import services from "../../Services";

const Sitemap = props => {
  const { facebookLabel, facebookIcon, facebookUrl } = props;

  return (
    <div className="sitemap grid-columns-2">
      <div className="white">
        <h2 className="font--medium bold white button-padding">QuickLinks</h2>
        {quickLinks.map((quickLink, i) => {
          return (
            <ul key={i}>
              <Link
                className="button-padding font--small white"
                to={quickLink["url"]}
              >
                {quickLink["label"]}
              </Link>
            </ul>
          );
        })}
        <a href={facebookUrl} className="middle button-padding">
          <p className="font--large center white bold">{facebookLabel}</p>
          <img
            className="icon--medium"
            src={facebookIcon}
            alt={facebookLabel}
          />
        </a>
      </div>
      <div className="white">
        <h2 className="font--medium bold white button-padding">Services</h2>
        {services.map((service, i) => {
          return (
            <ul key={i}>
              <Link
                className="font--small button-padding white"
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
