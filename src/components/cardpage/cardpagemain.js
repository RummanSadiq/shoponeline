import React from 'react';
import './cardpage.css';
import SubTotalCard from './subtotalcard';

const CardPageMain= () =>{
  return(
    <div className="card-page-grid">
      <div className='card-page-grid-item card-page-grid-item1'>1</div>
      <div className='card-page-grid-item card-page-grid-item2'><SubTotalCard /></div>
    </div>
  )
}

export default CardPageMain;
