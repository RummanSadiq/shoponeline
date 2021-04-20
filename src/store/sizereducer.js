const initialStates = {
  size_type:'',
  selected:false
}

const sizeReducer = (state= initialStates,action) =>{
  if(action.type === 'UPDATE_SIZE'){
    return{
      ...state,
      size_type:action.size_type,
      selected:true,
    }
  }
  return state;
}

export default sizeReducer;
