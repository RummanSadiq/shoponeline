import React , {Component} from 'react';
import {connect} from 'react-redux';

class Gallery extends Component {
  render(){
    const galleryList = this.props.gallery.map((g)=>{
      return(
        <div className='gallery-img' href ="/" key={g.id}>
          <img src={g.img} alt={g.text} width="50px" height="50px"/>
        </div>
      )
    });

    return(
      <div className="gallery">
        {galleryList}
      </div>
    )
  }
}

const mapStateToprops = (state) =>{
return {gallery:state.images};
}

const mapDispatchToProps = (dispatch) =>{

}

export default connect(mapStateToprops,null)(Gallery);
