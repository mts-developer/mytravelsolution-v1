import React from "react";
import "./menuheader.css";
import MenuContent from "../MenuContent";
import MenuFooter from "../MenuFooter";
import logos from "../../../../assets/images/logos";
import icons from "../../../../assets/images/icons";

const MenuHeader = props => {
  const onClick = props.onClick;
  return (
    <div className="menuheader">
      <div className="menuheader-container align-top">
        <div className="menuheader-left">
          <img
            className="logo--xxs"
            src={logos.mts_logo_full}
            alt="MTS Logo Full"
          />
        </div>
        <div className="menuheader-right">
          <a className="button-padding" href="tel:0393146957">
            <img
              className="icon--small"
              src={icons.phone_grey}
              alt="MTS Phone"
            />
          </a>
          <img
            onClick={e => onClick(e)}
            className="icon--small button-padding"
            src={icons.close_grey}
            alt="MTS Close"
          />
        </div>
      </div>
      <MenuContent />
      <hr className="off-white" />
      <MenuFooter />
    </div>
  );
};

export default MenuHeader;