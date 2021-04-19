import React from 'react';
import './cardpage.css';

const EditPageProductDetail = () =>{
  return(
    <div className="edit-page-product-detail">
      <div className="ep-product-detail-component ep-product-detail-header">
        <h2>The Special Pantsuit</h2>
      </div>
      <div className="ep-product-detail-component ep-product-detail-quantity">
        <div>-</div>
        <div>1</div>
        <div>+</div>
      </div>
      <div className="ep-product-detail-component ep-product-detail-colorandsize">
        <p>Color: Black Size: S</p>
      </div>
      <div className="ep-product-detail-component ep-product-detail-stock">
        <p>In Stock</p>
      </div>
    </div>
  )
}

export default EditPageProductDetail;
