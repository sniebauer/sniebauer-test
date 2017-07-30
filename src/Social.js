import React, { Component } from 'react';
import './css/Social.css'
import {Row, Column, Grid} from 'react-materialize';

class Social extends Component {
  render() {

    return (
      <div className='Social-div'>
        <ul className='social-list'>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Vimeo</li>
          <li>Tumblr</li>
        </ul>
      </div>
    )
  }
}


export default Social;
