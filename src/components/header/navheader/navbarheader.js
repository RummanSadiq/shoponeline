import React, { Component } from "react";
import './navbar.css';
import NavbarC1 from "./navbarc1";
import NavbarC2 from "./navbarc2";
import NavbarC3 from "./navbarc3";
class NavbarHeader extends Component{
  render(){
    return (
      <div className="navbar-header">
        <div className="nbdiv nbdiv1">
          <NavbarC1 />
        </div>
        <div className="nbdiv nbdiv2">
          <NavbarC2 />
        </div>
        <div className="nbdiv nbdiv3">
          <NavbarC3 />
        </div>
      </div>
    )
  }
}

export default NavbarHeader;

