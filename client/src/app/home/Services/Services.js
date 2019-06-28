import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
import services from "../../components/Services";

const Services = () => {
  return (
    <div className="services center margin-bottom-50">
      <div className="services-container full-width padding-5">
        <div className="padding-top-20">
          <div className="servicesgrid row wrap">
            {services.map((service, i) => {
              return (
                <Link
                  key={i}
                  to={service.url}
                  className="servicesgrid__box margin-5 padding-20 middle box-shadow"
                  style={{
                    background: `url(${service.background})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                >
                  <div className="grid-columns-2">
                    <div className="middle">
                      <img
                        className="service__icon icon--medium"
                        src={service.white}
                        alt="Service"
                      />
                    </div>
                    <div className="column padding-20">
                      <h2 className="bold font--large font-shadow white margin-none">
                        {service.label}
                      </h2>
                      <p className="service-description thin white padding-5">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
