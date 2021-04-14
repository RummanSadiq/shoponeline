import React, { Component } from "react";
import {IconContext} from 'react-icons';
import { FaGift, FaShoppingBag, FaUser } from "react-icons/fa";
import THeaderComponent from "./topheadercomponent";

class TopHeader extends Component{
  render(){
    return(
      <div className="topheader-container">
        <THeaderComponent>
          <div className="thc1">
            Daily Fashion
          </div>
        </THeaderComponent>
        <THeaderComponent>
          <div className="thc2">
            FREE SHIPPING
          </div>
        </THeaderComponent>
        <THeaderComponent>
            <div  className="thc3">
              <ul>
                <li>
                  <IconContext.Provider value={{style:{color:'rgb(110,110,110)',width:'20',height:'20'}}}>
                    <FaGift />
                </IconContext.Provider>
                </li>
                <li>
                <IconContext.Provider value={{style:{color:'rgb(110,110,110)',width:'20',height:'20'}}}>
                    <FaUser />
                </IconContext.Provider>
                </li>
                <li>
                <select class="select_input" style={{border: 'none', boxShadow: 'none',background:'none'}}><option value="$ AUD">$ AUD</option><option value="$ CAD">$ CAD</option><option value="kr. DKK">kr. DKK</option><option value="€ EUR">€ EUR</option><option value="£ GBP">£ GBP</option><option value="$ HKD">$ HKD</option><option value="¥ JPY">¥ JPY</option><option value="$ NZD">$ NZD</option><option value="$ SGD">$ SGD</option><option value="$ USD" selected="">$ USD</option></select>
                </li>
                <li>
                  <a href="#">
                    <IconContext.Provider value={{style:{color:'rgb(110,110,110)',width:'20',height:'20'}}}>
                      <FaShoppingBag />
                    </IconContext.Provider>
                    <span className='cart-count'>1</span>
                    <span className='cart-text'>BAG</span>
                  </a>
                </li>
              </ul>
            </div>
        </THeaderComponent>
      </div>
    )
  }

}

export default TopHeader;
