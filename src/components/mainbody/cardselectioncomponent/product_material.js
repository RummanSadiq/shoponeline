import React from 'react';
import MaterialType from './material_type';
import './product_material.css';

const ProductMaterial = () =>{
  return (
    <div className="product-material csitem">
      <div className="pm-heading">
        <h5 className="pm-header">Select Material</h5>
        <div className="pm-text">View Material Guide</div>
      </div>
      <div className="p-material"><MaterialType /></div>
    </div>
  )
}


export default ProductMaterial;
