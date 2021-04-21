const initialStates = {
  colors:[
    {id:1, color_type:'black'},
    {id:2, color_type:'red'},
    {id:3, color_type:'yellow'},
    {id:4, color_type:'blue'}
  ],
  color_type:'',
  selected:false
}

const colorReducer = (state= initialStates,action) =>{
  if(action.type === 'UPDATE_COLOR'){
    return{
      ...state,
      color_type:action.color_type,
      selected:true,
    }
  }
  return state;
}

export default colorReducer;
