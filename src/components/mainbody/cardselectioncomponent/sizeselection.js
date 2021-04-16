import React from 'react';
import './size.css';
import SizeType from './sizetype';

const SizeSelection = () =>{
  return(
    <div className="csitem cs-size">
      <div className="size-heading">
        <h5 className="hitem1">Select your Size</h5>
        <span className="hitem2">View Size Guide</span>
      </div>
      <div className="product-size">
        <SizeType />
      </div>
    </div>
  )
}

export default SizeSelection;
