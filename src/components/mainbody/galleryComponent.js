import React, {Component}from 'react';
import img1 from '../../assests/images/img1.jpg';
import img2 from '../../assests/images/img2.jpg';
import img3 from '../../assests/images/img3.jpg';
import img4 from '../../assests/images/img4.jpg';
import img5 from '../../assests/images/img5.jpg';
class GalleryComponent extends Component{
  render(){
    const a = [
      {
        id:1,
        img:img1,
        text:'jumpsuit-1'
      },
      {
        id:2,
        img:img2,
        text:'jumpsuit-2'
      },
      {
        id:3,
        img:img3,
        text:'jumpsuit-3',
      },
      {
        id:4,
        img:img4,
        text:'jumpsuit-4',
      },
      {
        id:5,
        img:img5,
        text:'jumpsuit-5',
      }
    ];
    const galleryList = a.map((g)=>{
      return(
        <div className='gallery-img' href ="/" key={g.id}>
          {/* {console.log(g.img)} */}
          <img src={g.img} alt={g.text} width="50px" height="50px"/>
        </div>
      )
    })
    return (
      <div className='gallery'>
        <div className="gallery-thumnail">
        {galleryList}
        </div>
      </div>
    )
  }


}

export default GalleryComponent;
