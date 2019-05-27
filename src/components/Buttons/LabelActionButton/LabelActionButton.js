import React from "react";
import "./labelactionbutton.css";

const LabelActionButton = props => {
  let label = props.label;
  let width = props.width;

  return (
    <p
      className="labelactionbutton ripple button button-padding middle center bold"
      role="button"
      style={{ width: `${width}` }}
    >
      {label.toUpperCase()}
    </p>
  );
};

LabelActionButton.defaultProps = {
  label: "Action Button"
};

export default LabelActionButton;
