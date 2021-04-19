import React from 'react';
import CardPageHeader from './cardpage-header';
import './cardpage.css';

const CardPage = () =>{
  return(
    <div className="card-page">
      <div className="card-page-header"><CardPageHeader /></div>
      <div className="card-page-container">2</div>
    </div>
  )
}

export default CardPage;
