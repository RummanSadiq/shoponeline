import React from 'react';
import ColorSelection from './cardselectioncomponent/colorselection';
import CsHeader from './cardselectioncomponent/csheader';
import ProductQuantity from './cardselectioncomponent/productquantity';
import ProductMaterial from './cardselectioncomponent/product_material';
import SizeSelection from './cardselectioncomponent/sizeselection';

const CardSelection = () => {
  return(
    <div className="card-selection grid-container">
      <div className="item1 gib"><CsHeader /></div>
      <div className="item2 gib"><SizeSelection /></div>
      <div className="item3 gib"><ColorSelection /></div>
      <div className="item4 gib "><ProductMaterial /></div>
      <div className="item5 gib"><ProductQuantity /></div>
      <div className="item6">6</div>
      <div className="item7">7</div>
    </div>
  )
}

export default CardSelection;
