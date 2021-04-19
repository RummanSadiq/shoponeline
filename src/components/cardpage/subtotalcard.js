import React from 'react';
import {IconContext} from 'react-icons';
import {SiAmericanexpress, SiApplepay, SiGooglepay, SiMastercard, SiVisa} from 'react-icons/si';
import {FaPaypal} from 'react-icons/fa';

const SubTotalCard = () =>{
  return(
    <div className="sub-total-card">
      <div className="st-card-component st-card-header">
        <div className="st-card-component1"><h4>SubTotal</h4></div>
        <div className="st-card-component1"><div>$120 USD</div></div>
      </div>
      <div className="st-card-component st-card-button">
        <button type="submit" className="st-checkout-buuton">CheckOut</button>
      </div>
      <div className="st-card-component st-card-icons">
        <div className="st-card-icon st-card-icon1">
          <IconContext.Provider value={{style:{size:'initial'}}}>
            <SiAmericanexpress />
          </IconContext.Provider>
        </div>
        <div className="st-card-icon st-card-icon2">
        <IconContext.Provider value={{style:{size:'initial'}}}>
            <SiMastercard />
          </IconContext.Provider>
        </div>
        <div className="st-card-icon st-card-icon3">
        <IconContext.Provider value={{style:{size:'initial'}}}>
            <SiVisa />
          </IconContext.Provider>
        </div>
        <div className="st-card-icon st-card-icon4">
        <IconContext.Provider value={{style:{size:'initial'}}}>
            <FaPaypal />
          </IconContext.Provider>
        </div>
        <div className="st-card-icon st-card-icon5">
        <IconContext.Provider value={{style:{size:'initial'}}}>
            <SiApplepay />
          </IconContext.Provider>
        </div>
        <div className="st-card-icon st-card-icon6">
        <IconContext.Provider value={{style:{size:'initial'}}}>
            <SiGooglepay />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}


export default SubTotalCard;
