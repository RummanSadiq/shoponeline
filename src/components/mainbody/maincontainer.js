import React from 'react';
import GalleryComponent from './galleryComponent';
import MainImg from './mainimg';
import ProductFContent from './productformcontent';

const MainContainer = () =>{

  return(
    <div className="main-container">
      <GalleryComponent />
      <MainImg />
      <ProductFContent />
    </div>
  )

}

export default MainContainer;
