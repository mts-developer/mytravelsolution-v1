import React from "react";
import "./labellinkbutton.css";
import { Link } from "react-router-dom";

const LabelLinkButton = props => {
  const { url, label, width, external } = props;

  return external === true ? (
    <a href={url}>
      <p
        className="labellinkbutton cursor-pointer button middle center bold"
        role="button"
        style={{ width: `${width}` }}
      >
        {label.toUpperCase()}
      </p>
    </a>
  ) : (
    <Link to={url}>
      <p
        className="labellinkbutton cursor-pointer button middle center bold"
        role="button"
        style={{ width: `${width}` }}
      >
        {label.toUpperCase()}
      </p>
    </Link>
  );
};

LabelLinkButton.defaultProps = {
  label: "Label Link"
};

export default LabelLinkButton;
