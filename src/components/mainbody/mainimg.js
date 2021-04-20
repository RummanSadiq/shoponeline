import React from 'react';
import {connect} from 'react-redux';

const MianImg = (props) =>{
  return(
    <div className="main-img">
      <img src={props.img1} alt="image1" width="700px" height="700px"/>
    </div>
  )
}

const mapStateToprops = (state, ownProps) =>{
  return{
    img1:state.uiR.img
  }
}
export default connect(mapStateToprops)(MianImg);
