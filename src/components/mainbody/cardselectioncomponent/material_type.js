import React,{Component} from 'react';
import './product_material.css';

class MaterialType extends Component {
  render(){
    const materials =[
      {id:1, material_name:'Silk'}
    ];
    const materiallist = materials.map((material) => {
      const className = "material_name material-" + material.material_name;
      return(
        <div className={className} key={material.id}>{material.material_name}</div>
      )
    })
    return(
      <>
        {materiallist}
      </>
    )
  }
}


export default MaterialType;
