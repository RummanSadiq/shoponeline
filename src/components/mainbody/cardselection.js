import React from 'react';
import CardButton from './cardselectioncomponent/cardbutton';
import ColorSelection from './cardselectioncomponent/colorselection';
import CsHeader from './cardselectioncomponent/csheader';
import ProductDesc from './cardselectioncomponent/productdesc';
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
      <div className="item6"><ProductDesc /></div>
      <div className="item7"><CardButton /></div>
    </div>
  )
}

export default CardSelection;
