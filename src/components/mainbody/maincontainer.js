import React from 'react';
import Gallery from './gallery';
import './main.css';

const MainContainer = () =>{

  return(
    <div className="main-container">
      <div className="main-component m-component1"><Gallery /></div>
      <div className="main-component m-component2">Component2</div>
      <div className="main-component m-component3">Component3</div>
    </div>
  )

}

export default MainContainer;
