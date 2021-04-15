import React from 'react';
import img1 from '../../assests/images/img1.jpg'

const MainImg = (props) =>{
  return (
    <div className='main-img main-component'>
      <img src={img1} alt="image1" width="650px" height="650px"/>
    </div>
  )
}

export default MainImg;
