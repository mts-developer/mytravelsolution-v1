import React from "react";
import "./headermenu.css";

const HeaderMenu = props => {
  const open = props.open;
  return open ? (
    <div className="listmenu-container listmenu-container--open">Hello</div>
  ) : (
    <div />
  );
};

export default HeaderMenu;
