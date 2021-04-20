import img1 from '../assests/images/img1.jpg';

const initialImage = {
  img:img1
}

const updateImageReducer = (state = initialImage,action) =>{
  if(action.type==='UPDATE_IMAGE'){
    return{
      ...state,
      img:action.img
    }
  }
  return state;
}

export default updateImageReducer;
