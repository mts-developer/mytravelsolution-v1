import React from "react";
import "./actionbutton.css";

const ActionButton = props => {
  let label = props.label;
  let width = props.width;

  return (
    <p
      className="actionbutton button button-padding button-shadow middle center font--medium white bold"
      role="button"
      style={{ width: `${width}` }}
    >
      {label}
    </p>
  );
};

ActionButton.defaultProps = {
  label: "Action Button"
};

export default ActionButton;
