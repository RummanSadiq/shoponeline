import img1 from '../assests/images/img1.jpg';
import img2 from '../assests/images/img2.jpg';
import img3 from '../assests/images/img3.jpg';
import img4 from '../assests/images/img4.jpg';
import img5 from '../assests/images/img5.jpg';

const products ={
  id:1,
  name:'t-shirt',
  type:'t-shirt',
  price:120,
  images:[
    {id:1,text:'img1',img:img1,selected:true},
    {id:2,text:'img2',img:img2,selected:false},
    {id:3,text:'img3',img:img3,selected:false},
    {id:4,text:'img4',img:img4,selected:false},
    {id:5,text:'img5',img:img5,selected:false},
  ],
  sizes:[
    {
      id:1,
      type:'s',
      selected:false,
      colors:[
        {
          id:1,
          name:'black',
          instock:true,
          selected:false,
          quantity:17
        },
        {
          id:2,
          name:'blue',
          instock:true,
          selected:false,
          quantity:7
        }
      ]
    },
    {
      id:2,
      type:'m',
      selected:false,
      colors:[
        {
          id:1,
          name:'red',
          instock:true,
          selected:false,
          quantity:21
        },
        {
          id:2,
          name:'blue',
          instock:true,
          selected:false,
          quantity:17
        }
      ]
    },
    {
      id:3,
      type:'l',
      selected:false,
      colors:[
        {
          id:1,
          name:'red',
          instock:true,
          selected:false,
          quantity:15
        },
        {
          id:2,
          name:'blue',
          instock:true,
          selected:false,
          quantity:16
        }
      ]
    },
    {
      id:4,
      type:'xl',
      selected:false,
      colors:[
        {
          id:1,
          name:'red',
          instock:true,
          selected:false,
          quantity:11
        },
        {
          id:2,
          name:'yellow',
          instock:true,
          selected:false,
          quantity:19
        }
      ]
    }
  ]
}


export default products;
