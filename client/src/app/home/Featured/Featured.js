import React from "react";
import "./featured.css";
import logos from "../../assets/images/logos";

const Featured = props => {
  const { title, description } = props;
  return (
    <div className="featured margin-bottom-50">
      <div className="column center padding-20">
        <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
        <h1 className="font--header bold primary-color margin-none">{title}</h1>
        <p className="font--medium font--center">{description}</p>
      </div>
      {props.children}
    </div>
  );
};

export default Featured;
