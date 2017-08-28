import React, { Component } from 'react';
import me from './me.jpg';
import './css/About.css';
import {Row, Col, Container} from 'react-materialize';

class About extends Component {
  render() {

    return (
      <Container >
        <h2 className="steves-h2">About</h2>
        <Row>
	       <Col s={12} l={6} m={6} className='About-photo'>
          <img src={me} alt='Steve Niebauer' />
          </Col>
	       <Col s={12} l={6} m={6} className='About-p'>
          <p>Experienced support manager with a demonstrated history of working in the video-tech industry. </p>
          <p>Here are some things I know & like:</p>
          <ul>
            <li>Support operations/community management</li>
            <li>HTML/CSS/Javascript</li>
            <li>React JS</li>
            <li>Video editing with Adobe & Apple products</li>
            <li>Video production</li>
            <li>Photography</li>



          </ul>

          </Col>
        </Row>


      </Container>
    )
  }
}




export default About;
