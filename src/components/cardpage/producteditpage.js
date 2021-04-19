import React from 'react';
import EditPageProductImage from './producteditImage';

const ProductEditPage = () =>{
  return(
    <div className="product-edit-page">
      <div className="close-button">X</div>
      <div className="edit-page-content">
        <div className="pe-page-content pep-product-image"><EditPageProductImage /></div>
        <div className="pe-page-content pep-product-detail">2</div>
        <div className="pe-page-content pep-product-price">3</div>
      </div>
    </div>
  )
}

export default ProductEditPage;
