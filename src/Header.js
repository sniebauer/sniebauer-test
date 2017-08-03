import React, { Component } from 'react';
import './css/Header.css';
import {Row, Col} from 'react-materialize';


class Header extends Component {
  render() {

    return (
      <div className="App-header">
      <Row>
      <Col s={12}>

        <ul>
          <li className='Header-li'><a href='#work' className='Header-a'>Work</a></li>
          <li className='Header-li'><a href='#about' className='Header-a'>About</a></li>
          <li className='Header-li'><a href='#contact' className='Header-a'>Contact</a></li>
          </ul>
          </Col>
          </Row>
      </div>




    )
  }
}


export default Header;
