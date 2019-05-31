import React from "react";
import "./sitemap.css";
import quickLinks from "../../../components/QuickLinks";
import services from "../../../components/Services";

const Sitemap = props => {
  let facebookLabel = props.facebookLabel;
  let facebookIcon = props.facebookIcon;
  let facebookUrl = props.facebookUrl;

  return (
    <div className="sitemap grid-columns-2">
      <div className="white">
        <h2 className="font--medium bold button-padding">QuickLinks</h2>
        {quickLinks.map((quickLink, i) => {
          return (
            <ul key={i}>
              <a className="button-padding" href={quickLink["url"]}>
                <p className="font--small white">{quickLink["label"]}</p>
              </a>
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
        <h2 className="font--medium bold button-padding">Services</h2>
        {services.map((service, i) => {
          return (
            <ul key={i}>
              <a className="button-padding" href={service["url"]}>
                <p className="font--small white">{service["label"]}</p>
              </a>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Sitemap;
