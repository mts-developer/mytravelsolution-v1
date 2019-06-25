import React from "react";
import "./partnercard.css";

const PartnerCard = props => {
  const { url, logo, description, color } = props;
  const style = {
    backgroundColor: color
  };

  return (
    <a className="partnercard" href={url}>
      <div className="partnercard-container card-shadow">
        <div className="partnercard-left middle padding-20">
          <img className="logo--medium" src={logo} alt="Partner Logo" />
        </div>
        <div className="partnercard-right middle padding-20" style={style}>
          <p className="white">{description}</p>
        </div>
      </div>
    </a>
  );
};

PartnerCard.defaultProps = {
  description: "No description",
  color: "var(--light-grey)"
};

export default PartnerCard;
