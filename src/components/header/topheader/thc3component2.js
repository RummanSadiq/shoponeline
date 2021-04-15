import React from 'react';
import {IconContext} from 'react-icons';
import {FaUser} from 'react-icons/fa';
const Thc3Component2 = () =>{
  return(
    <div className="thc3component thc3component2">
      <IconContext.Provider value = {{style:{height:'auto'}}}>
        <FaUser />
      </IconContext.Provider>
    </div>
  )
}

export default Thc3Component2;
