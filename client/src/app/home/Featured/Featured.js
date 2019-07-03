import React from "react";
import "./featured.css";
import logos from "../../assets/images/logos";

const Featured = props => {
  const { title, description, topPadding, bottomPadding } = props;
  return (
    <div className={`featured ${topPadding} ${bottomPadding}`}>
      <div className="column center">
        <img className="logo--medium" src={logos.mts_logo} alt="MTS Logo" />
        <h1 className="font--header bold primary-color margin-none">{title}</h1>
        <p className="font--medium font--center padding-bottom-20">
          {description}
        </p>
      </div>
      {props.children}
    </div>
  );
};

export default Featured;
