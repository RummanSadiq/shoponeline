import React,{Component} from 'react';
import './product_color.css';

class ProductColorType extends Component {
  render(){
    const product_colors =[
      {id:1, color_name:'black'},
      {id:2, color_name:'red'},
      {id:3, color_name:'yellow'},
      {id:4, color_name:'blue'}
    ];
    const colorlist = product_colors.map((color) => {
      const className = "color_name color-" + color.color_name;
      return(
        <div className={className} key={color.id}></div>
      )
    })
    return(
      <>
        {colorlist}
      </>
    )
  }
}


export default ProductColorType;
