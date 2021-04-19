import React from 'react';
import {Link} from 'react-router-dom';

const count = 1;
const CartText = () =>{
  return(
    <div className="cartcomponent carttext">
      <Link to='/cardpage'>
        <span>{count} BAG</span>
      </Link>
    </div>
  )
}

export default CartText;
