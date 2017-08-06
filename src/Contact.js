import React, { Component } from 'react';
import './css/Contact.css';
import ContactForm from './Contact-form.js';
import Social from './Social.js';
import {Row, Col} from 'react-materialize';



class Contact extends Component {
  render() {
    return (
      <div className='Contact-div'>
        <h2 className="steves-h2">Contact</h2>
        <Row>
        <Col s={12} l={9} m={9} className='Contact-box'>

          <ContactForm />

        </Col>
        <Col s={12} l={3} m={3} className='Social-box'>

          <Social />

        </Col>
        </Row>

      </div>
    )
  }
}





export default Contact;
