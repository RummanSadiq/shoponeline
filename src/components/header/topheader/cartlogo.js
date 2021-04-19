import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {Link} from 'react-router-dom';

const CartLogo = () =>{
  return(
    <div className="cartcomponent cartlogo">
      <Link to= '/cardpage'>
        <IconContext.Provider value={{style:{height:'auto'}}}>
          <FaShoppingBag />
        </IconContext.Provider>
      </Link>
    </div>
  )
}

export default CartLogo;
