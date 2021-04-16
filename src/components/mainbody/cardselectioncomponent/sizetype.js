import React,{Component} from 'react';
import './size.css';

class SizeType extends Component {
  render(){
    const size =[
      {id:1, sizetype:'S'},
      {id:2, sizetype:'M'},
      {id:3, sizetype:'L'},
      {id:4, sizetype:'XL'}
    ];
    const sizelist = size.map((s) => {
      const className = "size-type size-" + s.sizetype;
      return(
        <div className={className} key={s.id}>
          {s.sizetype}
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


export default SizeType;
