import React from "react";
import "./linkbutton.css";
import { Link } from "react-router-dom";

const LinkButton = props => {
  const { url, label, width } = props;
  var color =
    props.color === "primary"
      ? // eslint-disable-next-line
        (color = "button-color-primary")
      : // eslint-disable-next-line
        (color = "button-color-secondary");

  return (
    <Link
      className={`${color} button button-padding button-shadow pointer middle center`}
      role="button"
      style={{ width: `${width}` }}
      to={url}
    >
      <p className="font--medium white bold">{label}</p>
    </Link>
  );
};

LinkButton.defaultProps = {
  label: "Link Button",
  color: "secondary"
};

export default LinkButton;
