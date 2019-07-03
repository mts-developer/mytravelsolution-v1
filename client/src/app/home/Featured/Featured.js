import React from "react";
import "./featured.css";
import logos from "../../assets/images/logos";

const Featured = props => {
  const { title, description } = props;
  return (
    <div className="featured padding-y-20">
      <div className="column center">
        <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
        <h1 className="font--header bold primary-color margin-none">{title}</h1>
        <p className="font--medium font--center">{description}</p>
      </div>
      {props.children}
    </div>
  );
};

export default Featured;
