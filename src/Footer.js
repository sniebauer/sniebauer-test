import React, { Component } from 'react';
import './css/Footer.css'


class Footer extends Component {
  render() {
    let name = 'SNIEBAUER';
    return (
      <div className='footer-div'>




        <p>{name} © 2017</p>
        <div className='Social-div'>

        <ul className='social-list'>
          <li className='icon-list'><a href='https://twitter.com/steveniebauer' target='_new'><i className="fa fa-twitter" aria-hidden="true"></i></a></li>

          <li className='icon-list'><a href='https://www.linkedin.com/in/sniebauer/' target='_new'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>

          <li className='icon-list'><a href='http://vimeo.com/sniebauer' target='_new'><i className="fa fa-vimeo-square" aria-hidden="true"></i></a></li>

          <li className='icon-list'><a href='https://sniebauer.tumblr.com/' target='_new'><i className="fa fa-tumblr-square" aria-hidden="true"></i></a></li>

          <li className='icon-list'><a href='https://www.instagram.com/sniebauer/' target='_new'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>

        <span className='social-float'></span>

        </div>
      </div>

    )
  }
}


export default Footer;
