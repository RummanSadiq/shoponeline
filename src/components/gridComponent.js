 import React from 'react';


 const GridComponent = (props) =>{
  return (
    <div className="grid-component">
      <div className="grid-component-container">
       {props.children}
      </div>
    </div>
  )
 }

 export default GridComponent;
