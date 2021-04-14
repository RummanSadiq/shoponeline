import React, { Component } from "react";
import NbComponent from "./navbarheadercomponent";

class NavbarHeader extends Component{
  render(){
    return (
      <div className="navbar-header">
        <ul>
          <NbComponent>
            <a href=''>TODAY'S PRODUCT</a>
          </NbComponent>
          <NbComponent>
            <a class="df" href=''>DAILY FASHION</a>
          </NbComponent>
          <NbComponent>
            <a href=''>CONTACT US</a>
          </NbComponent>
        </ul>
      </div>
    )
  }
}

export default NavbarHeader;
