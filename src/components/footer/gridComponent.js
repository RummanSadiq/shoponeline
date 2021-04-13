 import React from 'react';


 const GridComponent = (props) =>{
  return (
    <div className="grid-component-container">
      {props.children}
    </div>
  )
 }

 export default GridComponent;
