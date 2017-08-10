import React, { Component } from 'react';
import './css/Contact.css';
import ContactForm from './Contact-form.js';




class Contact extends Component {
  render() {
    return (
      <div className='Contact-div'>
        <h2 className="steves-h2">Contact</h2>

        <div className='Contact-box'>

          <ContactForm />

        </div>

      </div>
    )
  }
}





export default Contact;
