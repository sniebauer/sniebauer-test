import React, { Component } from 'react';
import './Contact.css';
import ContactForm from './Contact-form.js';


class Contact extends Component {
  render() {
    return (
      <div className='Contact-div'>
        <h2 className="steves-h2">Contact</h2>
        <section className='Contact-box'>
          <ContactForm />
        </section>
        <section className='Social-box'>

        </section>

      </div>
    )
  }
}





export default Contact;
