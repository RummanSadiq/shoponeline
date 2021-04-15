
import React from 'react';
import Select from 'react-select';
const options =[
  {value:'$ AUD', label:'$ AUD'},
  {value:'$ CAD', label:'$ CAD'},
  {value:'kr. DKK', label:'kr. DKK'},
  {value:'€ EUR', label:'€ EUR'},
  {value:'£ GBP', label:'£ GBP'},
  {value:'$ HKD', label:'$ HKD'},
  {value:'¥ JPY', label:'¥ JPY'},
  {value:'$ NZD', label:'$ NZD'},
  {value:'$ SGD', label:'$ SGD'},
  {value:'$ USD', label:'$ USD'}
]

const Thc3Component3 = () =>{
  return(
    <div className="thc3component thc3component3">
      <Select options={options} />
    </div>
  )
}

export default Thc3Component3;
