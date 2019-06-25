import React from "react";
import "./linkbutton.css";
import { Link } from "react-router-dom";

const LinkButton = props => {
  const { url, label, width, external } = props;
  var color =
    props.color === "primary"
      ? // eslint-disable-next-line
        (color = "button-color-primary")
      : // eslint-disable-next-line
        (color = "button-color-secondary");

  return external === true ? (
    <a
      className={`${color} button button-padding button-shadow pointer middle center`}
      role="button"
      style={{ width: `${width}` }}
      href={url}
    >
      <p className="font--medium white bold">{label}</p>
    </a>
  ) : (
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
