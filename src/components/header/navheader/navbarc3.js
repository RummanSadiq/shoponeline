import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal'
import { Formik, Field, Form } from 'formik';

const NavbarC3 = () =>{
  const [isOpen,setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);
  return(
    <div>
      <div onClick={onOpen}>Contact Us</div>
      <Modal open={isOpen} onClose={onClose} center>
        <h2 className="modal-header">Contact Us</h2>
        <Formik
          initialValues={{name:'',email:'',subject:'',message:''}}
          onSubmit={console.log('message received')}>
          <Form  className="modal-grid">
            <Field type='text' name='name' placeholder='Your Name' className="mg-component mg-componet1" />
            <Field type='email' name='email' placeholder='Enter Email Address' className="mg-component mg-componet2" />
            <Field type='text' name='subject' placeholder='Subject' className="mg-component mg-componet3" />
            <Field type='text' name='message' placeholder='Leave Message' className="mg-component mg-componet4" />
            <div className="mg-component mg-componet5"><button type="submit" className="m-send-meassage">Send Message</button></div>
          </Form>
        </Formik>
      </Modal>
    </div>
  )
}

export default NavbarC3;
