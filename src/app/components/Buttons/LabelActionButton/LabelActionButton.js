import React from "react";
import "./labelactionbutton.css";

const LabelActionButton = props => {
  let onClick = props.onClick;
  let label = props.label;
  let width = props.width;

  return (
    <p
      onClick={onClick}
      className="labelactionbutton ripple button button-padding middle center bold pointer"
      role="button"
      style={{ width: `${width}` }}
    >
      {label.toUpperCase()}
    </p>
  );
};

LabelActionButton.defaultProps = {
  label: "Action Button",
  onClick: () => alert("Label Action")
};

export default LabelActionButton;
