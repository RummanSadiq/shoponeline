import React, {Component} from 'react';
import GridComponent from './gridComponent';
import {IconContext} from 'react-icons';
import {FaGlobe,FaTruck,FaClock} from 'react-icons/fa';

class GridContainer extends Component{
  render(){
    return(
      <div className="grid-container">
        <GridComponent>
        <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 0, 0)"}}}>
          <div className="grid-component-icon">
            <FaGlobe />
          </div>
        </IconContext.Provider>
        <div className="grid-component-text">
          <p>Free worldwide <br />shipping*</p>
        </div>
        </GridComponent>

        <GridComponent>
        <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 0, 0)"}}}>
          <div className="grid-component-icon">
            <FaTruck/>
          </div>
        </IconContext.Provider>
        <div className="grid-component-text">
          <p>Easy 60-Day <br /> Exchanges & Returns</p>
        </div>
        </GridComponent>

        <GridComponent>
        <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 0, 0)"}}}>
          <div className="grid-component-icon">
            <FaClock />
          </div>
        </IconContext.Provider>
        <div className="grid-component-text">
          <p>24/7 Customer<br /> Support</p>
        </div>
        </GridComponent>
      </div>
    )
  }

}

export default GridContainer;
