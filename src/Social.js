import React, { Component } from 'react';
import './css/Social.css'
import {Row, Column, Grid} from 'react-materialize';

class Social extends Component {
  render() {

    return (
      <div className='Social-div'>
        <ul className='social-list'>
          <li className='icon-list'><i className="fa fa-twitter" aria-hidden="true"></i></li>
          <li className='icon-list'><i className="fa fa-linkedin-square" aria-hidden="true"></i>
</li>
          <li className='icon-list'><i className="fa fa-facebook-square" aria-hidden="true"></i></li>
          <li className='icon-list'><i className="fa fa-vimeo-square" aria-hidden="true"></i></li>
          <li className='icon-list'><i className="fa fa-tumblr-square" aria-hidden="true"></i></li>
          <li className='icon-list'><i className="fa fa-instagram" aria-hidden="true"></i></li>
        </ul>
      </div>
    )
  }
}


export default Social;
