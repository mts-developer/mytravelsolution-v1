import React from "react";
import "./linkbutton.css";

const LinkButton = props => {
  let url = props.url;
  let label = props.label;

  return (
    <a
      className="linkbutton button button-padding button-shadow align-middle align-center"
      href={url}
    >
      <p className="font--medium white bold">{label}</p>
    </a>
  );
};

LinkButton.defaultProps = {
  label: "Button"
};

export default LinkButton;
