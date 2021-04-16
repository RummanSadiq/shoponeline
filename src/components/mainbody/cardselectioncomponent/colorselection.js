import React from 'react';
import './product_color.css';
import ProductColorType from './product_colors';

const ColorSelection = () =>{
  return (
    <div className="color-selection csitem">
      <div className="colors-header">Select Your Color</div>
      <div className="product-color">
        <ProductColorType />
      </div>
    </div>
  )
}

export default ColorSelection;
