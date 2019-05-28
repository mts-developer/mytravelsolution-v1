import React from "react";
import "./menuheader.css";
import ServicesList from "../../../ServicesList";
import MenuFooter from "../MenuFooter";
import logos from "../../../../assets/images/logos";
import icons from "../../../../assets/images/icons";

const MenuHeader = props => {
  const onClick = props.onClick;
  return (
    <div className="menuheader">
      <div className="menuheader-container top">
        <div className="menuheader-left">
          <img
            className="logo--small"
            src={logos.mts_logo_full}
            alt="MTS Logo Full"
          />
        </div>
        <div className="menuheader-right">
          <a className="button-padding" href="tel:0393146957">
            <img
              className="icon--small"
              src={icons.phone_grey_svg}
              alt="MTS Phone"
            />
          </a>
          <img
            onClick={e => onClick(e)}
            className="icon--small button-padding"
            src={icons.close_grey_svg}
            alt="MTS Close"
          />
        </div>
      </div>
      <div className="padding-10">
        <ServicesList theme="dark" />
      </div>
      <hr className="off-white" />
      <MenuFooter />
    </div>
  );
};

export default MenuHeader;
