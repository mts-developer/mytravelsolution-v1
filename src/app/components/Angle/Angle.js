import React from "react";
import "./angle.css";
import colors from "../../themes/colors";

const Angle = props => {
  let fill = props.fill;
  let top = props.top;

  return (
    <svg
      className={`full-width ${top ? "angle-top" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon fill={fill} points="0,100 100,0 100,100 0,100" />
    </svg>
  );
};

Angle.defaultProps = {
  fill: colors.darkGrey
};

export default Angle;
