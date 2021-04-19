import React from 'react';
import CardPageHeader from './cardpage-header';
import './cardpage.css';
import CardPageMain from './cardpagemain';

const CardPage = () =>{
  return(
    <div className="card-page">
      <div className="card-page-header"><CardPageHeader /></div>
      <div className="card-page-container"><CardPageMain /></div>
    </div>
  )
}

export default CardPage;
