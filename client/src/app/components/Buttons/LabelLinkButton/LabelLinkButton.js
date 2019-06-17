import React from "react";
import "./labellinkbutton.css";
import { Link } from "react-router-dom";

export default props => {
  const { url, label, width } = props;

  return (
    <Link to={url}>
      <p
        className="labellinkbutton cursor-pointer button button-padding middle center bold pointer"
        role="button"
        style={{ width: `${width}` }}
      >
        {label.toUpperCase()}
      </p>
    </Link>
  );
};
