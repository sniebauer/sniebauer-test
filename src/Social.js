import React, { Component } from 'react';
import './css/Social.css';
import {Row, Col} from 'react-materialize';


class Social extends Component {
  render() {

    return (
      <div className='Social-div'>

      <ul className='social-list'>
        <li className='icon-list'><a href='https://twitter.com/steveniebauer' target='_new'><i className="fa fa-twitter" aria-hidden="true"></i></a></li>

        <li className='icon-list'><a href='https://www.linkedin.com/in/sniebauer/' target='_new'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>

        <li className='icon-list'><a href='https://www.facebook.com/sniebauer' target='_new'><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>

        <li className='icon-list'><a href='http://vimeo.com/sniebauer' target='_new'><i className="fa fa-vimeo-square" aria-hidden="true"></i></a></li>

        <li className='icon-list'><a href='https://sniebauer.tumblr.com/' target='_new'><i className="fa fa-tumblr-square" aria-hidden="true"></i></a></li>

        <li className='icon-list'><a href='https://www.instagram.com/sniebauer/' target='_new'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
      </ul>

      </div>
    )
  }
}


export default Social;
