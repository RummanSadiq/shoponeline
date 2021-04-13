import React from 'react';

const SignUpForm = () =>{
  return(
    <div className="form-container">
      <label>SUBSCRIBE FOR WEEKLY OFFER NOTIFICATION</label>
      <form className='form'>
        <div className='form-control'>
          <input className='form-input' type='email' name='emai' placeholder='Enter email address' />
        </div>
        <div className='form-control'>
          <button className='form-button'>Sign Up</button>
        </div>
      </form>
      <br />
      <br />
    </div>
  )
}

export default SignUpForm;
