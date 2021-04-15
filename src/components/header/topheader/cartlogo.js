import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const CartLogo = () =>{
  return(
    <div className="cartcomponent cartlogo">
      <IconContext.Provider value={{style:{height:'auto'}}}>
        <FaShoppingBag />
      </IconContext.Provider>
    </div>
  )
}

export default CartLogo;
