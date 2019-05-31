import React from "react";
import "./actionbutton.css";

const ActionButton = props => {
  let action = props.action;
  let label = props.label;
  let width = props.width;
  var color =
    props.color === "primary"
      ? // eslint-disable-next-line
        (color = "button-color-primary")
      : // eslint-disable-next-line
        (color = "button-color-secondary");

  return (
    <p
      onClick={action}
      className={`${color} button button-padding button-shadow middle center font--medium white bold pointer`}
      role="button"
      style={{ width: `${width}` }}
    >
      {label}
    </p>
  );
};

ActionButton.defaultProps = {
  label: "Action Button",
  color: "primary",
  onClick: () => alert("Action")
};

export default ActionButton;
