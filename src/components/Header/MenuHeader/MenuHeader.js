import React from "react";
import "./menuheader.css";
import MenuContents from "../MenuContents";
import logos from "../../../assets/images/logos";
import icons from "../../../assets/images/icons";

const MenuHeader = props => {
  const onClick = props.onClick;
  return (
    <div className="headermenu-container">
      <div className="headermenu-wrapper">
        <img
          className="logo--xxs"
          src={logos.mts_logo_full}
          alt="MTS Logo Full"
        />
        <div className="headermenu__wrapper--right">
          <img className="icon--xxs" src={icons.phone_grey} alt="MTS Phone" />
          <a
            className="font--xs font--bold headermenu__wrapper--right__link"
            href="tel:0393146957"
          >
            03 9314 6957
          </a>
          <img
            onClick={e => onClick(e)}
            className="icon--xxs"
            src={icons.close_grey}
            alt="MTS Close"
          />
        </div>
      </div>
      <MenuContents />
    </div>
  );
};

export default MenuHeader;
