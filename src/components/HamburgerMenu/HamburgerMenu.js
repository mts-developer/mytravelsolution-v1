import React from "react";
import "./hamburgermenu.css";

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  toggleMenu = (e) => {
    e.preventDefault()
    this.setState({
      open: !this.state.open
    })
  }

  toggleClass = () => {
    return (
      this.state.open ? (
        <div>
          <div className={"hamburgermenu__bar hamburgermenu__bar--top--open"}/>
          <div className={"hamburgermenu__bar hamburgermenu__bar--middle--open"}/>
          <div className={"hamburgermenu__bar hamburgermenu__bar--bottom--open"}/>
        </div>
      ) : (
        <div>
          <div className={"hamburgermenu__bar hamburgermenu__bar--top"}/>
          <div className={"hamburgermenu__bar"}/>
          <div className={"hamburgermenu__bar hamburgermenu__bar--bottom"}/>
        </div>
      )
    )
  }

  render(){
    return(
      <div onClick={e => this.toggleMenu(e)}>
        {this.toggleClass()}
      </div>
      
    )
  }
}

export default HamburgerMenu;
