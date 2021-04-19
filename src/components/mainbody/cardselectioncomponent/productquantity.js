import React from 'react';
import PqComponent1 from './pqcomponent1';
import PqComponent2 from './pqcomponent2';
import PqComponent3 from './pqcomponent3';
import "./productquantity.css";

const ProductQuantity = () =>{
  return(
    <div className="csitem product-quantity">
      <div className="pq-header">Select Quantity</div>
      <div className="pq-grid">
        <div className="pq-comp1 pq-comp"><PqComponent1 /></div>
        <div className="pq-comp2 pq-comp"><PqComponent2 /></div>
        <div className="pq-comp3 pq-comp"><PqComponent3 /></div>
      </div>
    </div>
  )
}

export default ProductQuantity;
