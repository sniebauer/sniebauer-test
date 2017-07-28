import React, { Component } from 'react';
import './Header.css'


class Header extends Component {
  render() {

    return (
      <div className="App-header">
        <ul>
          <li className='Header-li'><a href='#about' className='Header-a'>About</a></li>
          <li className='Header-li'><a href='#work' className='Header-a'>Work</a></li>
          <li className='Header-li'><a href='#contact' className='Header-a'>Contact</a></li>
          </ul>
      </div>




    )
  }
}


export default Header;
