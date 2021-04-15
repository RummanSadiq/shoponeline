
import React from 'react';
import Thc3Component1 from './thc3component1';
import Thc3Component2 from './thc3component2';
import Thc3Component3 from './thc3component3';
import Thc3Component4 from './thc3component4';

const ThComponent3 = () =>{
  return(
    <div className="thcomponent thcomponent3">
      <div className="thc3">
        <Thc3Component1 />
      </div>
      <div className="thc3">
        <Thc3Component2 />
      </div>
      <div className="thc3 select">
        <Thc3Component3 />
      </div>
      <div className="thc3">
        <Thc3Component4 />
      </div>
    </div>
  )
}

export default ThComponent3;
