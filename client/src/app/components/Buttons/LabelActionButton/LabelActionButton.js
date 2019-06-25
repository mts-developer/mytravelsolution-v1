import React from "react";
import "./labelactionbutton.css";

const LabelActionButton = props => {
  const { onClick, label, width } = props;

  return (
    <p
      onClick={onClick}
      className="labelactionbutton cursor-pointer button button-padding middle center bold"
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
