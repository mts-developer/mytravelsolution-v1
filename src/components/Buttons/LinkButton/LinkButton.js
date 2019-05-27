import React from "react";
import "./linkbutton.css";

const LinkButton = props => {
  let url = props.url;
  let label = props.label;
  let width = props.width;

  return (
    <a
      className="linkbutton button button-padding button-shadow middle center"
      role="button"
      style={{ width: `${width}` }}
      href={url}
    >
      <p className="font--medium white bold">{label}</p>
    </a>
  );
};

LinkButton.defaultProps = {
  label: "Link Button"
};

export default LinkButton;
