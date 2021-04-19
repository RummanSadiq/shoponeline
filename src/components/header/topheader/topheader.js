import React, { Component } from "react";
import './theader.css';
import ThComponent1 from "./thcomponent1";
import ThComponent2 from "./thcomponent2";
import ThComponent3 from "./thcomponent3";

class TopHeader extends Component{
  render(){
    return(
      <div className="topheader-container">
        <div className="div1"><ThComponent1 /></div>
        <div className="div2"><ThComponent2 /></div>
        <div className="div3"><ThComponent3 /></div>
      </div>
    )
  }

}

export default TopHeader;
