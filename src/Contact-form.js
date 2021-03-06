import React from 'react';
import './css/Contact-form.css';
import {Row} from 'react-materialize';

class ReactFormLabel extends React.Component {
  render() {
    return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    )
  }
}

class ContactForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  handleChange = (e) => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };

  handleSubmit = (e, message) => {
    e.preventDefault();

    let formData = {
      formSender: this.state.name,
      formEmail: this.state.email,
      formSubject: this.state.subject,
      formMessage: this.state.message
    }

    if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
      return false;
    }

    // $.ajax({
    //   url: '/some/url',
    //   dataType: 'json',
    //   type: 'POST',
    //   data: formData,
    //   success: function(data) {
    //     if (confirm('Thank you for your message. Can I erase the form?')) {
    //       document.querySelector('.form-input').val('');
    //     }
    //   },
    //   error: function(xhr, status, err) {
    //     console.error(status, err.toString());
    //     alert('There was some problem with sending your message.');
    //   }
    // });

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  render() {
    return(
      <Row>

          <form className='contact-form' action="https://www.enformed.io/hleree4v" method="POST">
            <fieldset className='form-group'>
              <ReactFormLabel htmlFor='formName' title='Name:' />

              <input id='formName'  className='s-form-input' name='name' type='text' ref='formName' required onChange={this.handleChange} value={this.state.name} />
            </fieldset>

            <fieldset className='form-group'>
              <ReactFormLabel htmlFor='formEmail' title='Email Address:' />

              <input id='formEmail' className='s-form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
            </fieldset>

            <fieldset className='form-group'>
              <ReactFormLabel htmlFor='formSubject' title='Subject:'/>

              <input id='formSubject' className='s-form-input' name='subject' type='text' required onChange={this.handleChange} value={this.state.subject} />
            </fieldset>
            <input type='hidden' name='*honeypot' />

            <fieldset className='form-group'>
              <ReactFormLabel htmlFor='formMessage' title='Message:' />

              <textarea id='formMessage' className='s-form-textarea' name='message' required onChange={this.handleChange}></textarea>
            </fieldset>

            <div className='form-group'>
              <input id='formButton' className='btn-2' type='submit' placeholder='Send message' />
            </div>
          </form>

      </Row>

    )
  }
};


export default ContactForm;
