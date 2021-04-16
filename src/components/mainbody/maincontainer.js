import React from 'react';
import CardSelection from './cardselection';
import Gallery from './gallery';
import './main.css';
import MianImg from './mainimg';

const MainContainer = () =>{

  return(
    <div className="main-container">
      <div className="main-component m-component1"><Gallery /></div>
      <div className="main-component m-component2"><MianImg /></div>
      <div className="main-component m-component3">< CardSelection /></div>
    </div>
  )

}

export default MainContainer;
