import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';

const initialValues ={
  email:''
}

const onSubmit = values => {
}
const validationSchema = yup.object({
  email:yup.string().email('Invalid Email').required('Required'),
})

const SignUpForm = () =>{
  return(
    <div className="form-container">
      <label>SUBSCRIBE FOR WEEKLY OFFER NOTIFICATION</label>
      <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit} >
    </Formik>
    </div>
  )
}

export default SignUpForm;
