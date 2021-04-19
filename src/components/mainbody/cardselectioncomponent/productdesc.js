import React from 'react';
import PdComponent1 from './pdcomponent1';
import PdComponent2 from './pdcomponent2';
import './productdesc.css';

const ProductDesc = () =>{
  return(
    <div className="productdesc csitem">
      <div className="pd-component1 pd-component"><PdComponent1 /></div>
      <div className="pd-component2 pd-component"><PdComponent2 /></div>
    </div>
  )
}

export default ProductDesc;
