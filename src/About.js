import React, { Component } from 'react';
import me from './me.jpg';
import './css/About.css';
import {Row, Col, Grid} from 'react-materialize';

class About extends Component {
  render() {

    return (
      <div className='About-div'>
        <h2 className="steves-h2">About</h2>
        <Row>
	       <Col s={6} className='About-photo'>
          <img src={me} alt='Steve Niebauer photo' />
          </Col>
	       <Col s={6} className='About-p'>
          <p>Experienced support manager with a demonstrated history of working in the tech industry with a focus on video. Skilled in community management, video production & editing, support operations, frontend development, and product.</p>
          
          </Col>
        </Row>


      </div>
    )
  }
}




export default About;
