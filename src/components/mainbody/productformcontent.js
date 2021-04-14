import React from 'react';
import PfComponent from './pfcomponent';

const ProductFContent = () => {
  return (
    <div className="productform-content">
      <PfComponent>
        <div className='pfc-header'>
          <h1>The Special Pantsuit</h1>
          <p>$120 USD</p>
        </div>
      </PfComponent>

      <PfComponent>
        <div className='pfc-size-component'>
          <h5>SELECT YOUR SIZE</h5>
          <span>View Size Guide</span>
          <div className="size-ul">
            <ul>
              <li><span>S</span></li>
              <li><span>M</span></li>
              <li><span>L</span></li>
              <li><span>XL</span></li>
            </ul>
          </div>
        </div>
      </PfComponent>

      <PfComponent>
        <div className='pfc-color-component'>
          <h5>SELECT YOUR COLOR</h5>
          <div className="color-ul">
            <ul>
              <li><span className="black"></span></li>
              <li><span className="red"></span></li>
              <li><span className="orange"></span></li>
              <li><span className="blue"></span></li>
            </ul>
          </div>
        </div>
      </PfComponent>

      <PfComponent>
        <div className='pfc-material-component'>
          <h5>SELECT MATERIAL</h5>
          <span>View Material Guide</span>
          <div className="material-ul">
            <ul>
              <li><span>Silk</span></li>
            </ul>
          </div>
        </div>
      </PfComponent>

      <PfComponent>
        <div className='pfc-quantity-component'>
          <h5>SELECT QUANTITY</h5>
          <div className="quantity-ul">
            <ul>
              <li><span>-</span></li>
              <li><input type="number" value='0' name='quantity'/></li>
              <li><span>+</span></li>
            </ul>
            <span>Available Quantity:{}</span>
          </div>
        </div>
      </PfComponent>

      <PfComponent>
        <div className='pfc-product-desc'>
          <p>This is the coolest pantsuit you"ve ever seen. Fits like a dream. Wear this everywhere, and nowhere.</p>
          <ul>
            <li>So baggy and yet hugs all the right places</li>
            <li>Big hidden pockets</li>
            <li>Front zipper so you can zip yourself in</li>
            <li>Silk material, reinforced stitching</li>
          </ul>
        </div>
      </PfComponent>

      <PfComponent>
        <div className='pfc-addtocart-button'>
          <button type="button" className="addtocart-btn">ADD TO BAG</button>
        </div>
      </PfComponent>
    </div>
  )
}

export default ProductFContent;

