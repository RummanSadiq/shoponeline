import React , {Component} from 'react';
import SignUpForm from './footersignupform';
import GridContainer from './gridContainer';

class Footer extends Component {
  render(){
    return (
      <div className="footer-container">
        <GridContainer />
        <SignUpForm />
      </div>
    )
  }

}

export default Footer;
