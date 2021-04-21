import React,{Component} from 'react';
import './product_color.css';
import {connect} from 'react-redux';
import {FaCheck} from 'react-icons/fa';


class ProductColorType extends Component {
  render(){
    const colorlist = this.props.product_colors.map((color) => {
      const className = "color_name color-" + color.color_type;
      const colors = this.props.colors.filter(c => c.type===this.props.size_type);
      const colos =colors[0].colors.map(c => c.name)
      console.log(colos[1]);
      return(
        <div  onClick={()=>this.props.updateColor(color.color_type)} className={className} key={color.id}>{this.props.color_type===color.color_type?<FaCheck />:''}</div>
      )
    })
    return(
      <>
        {colorlist}
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    product_colors:state.cR.colors,
    size_type:state.sR.size_type,
    colors:state.rR.sizes,
    color_type:state.cR.color_type
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    updateColor:(color_type) => dispatch({type:'UPDATE_COLOR',color_type})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductColorType);
