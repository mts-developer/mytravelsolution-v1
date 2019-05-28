import React from "react";
import "./linkbutton.css";

const LinkButton = props => {
  let url = props.url;
  let label = props.label;
  let width = props.width;
  var color =
    props.color === "primary"
      ? // eslint-disable-next-line
        (color = "button-color-primary")
      : // eslint-disable-next-line
        (color = "button-color-secondary");

  return (
    <a
      className={`${color} button button-padding button-shadow middle center`}
      role="button"
      style={{ width: `${width}` }}
      href={url}
    >
      <p className="font--medium white bold">{label}</p>
    </a>
  );
};

LinkButton.defaultProps = {
  label: "Link Button",
  color: "secondary"
};

export default LinkButton;
