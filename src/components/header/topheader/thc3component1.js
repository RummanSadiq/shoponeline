
import React from 'react';
import {IconContext} from 'react-icons';
import {FaGift} from 'react-icons/fa';
const Thc3Component1 = () =>{
  return(
    <div className="thc3component thc3component1">
      <IconContext.Provider value = {{style:{height:'auto'}}}>
        <FaGift />
      </IconContext.Provider>
    </div>
  )
}

export default Thc3Component1;
