import React,{Component} from 'react';
import './size.css';
import {connect} from 'react-redux';

class SizeType extends Component {
  render(){
    const sizelist = this.props.size.map((s) => {
      const className = s.type===this.props.size_type&&this.props.selected?"size-type active":'size-type'
      return(
        <div onClick={()=>this.props.updateSize(s.type)} className={className} key={s.id}>
          {s.type}
        </div>
      )
    })
    return(
      <>
        {sizelist}
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    size:state.rR.sizes,
    size_type:state.sR.size_type,
    selected:state.sR.selected
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    updateSize:(size_type)=>dispatch({type:'UPDATE_SIZE',size_type})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SizeType);
