import React, { Component } from 'react';
import me from './me.jpg';
import './css/About.css';
import {Row, Col, Grid, Container} from 'react-materialize';

class About extends Component {
  render() {

    return (
      <Container >
        <h2 className="steves-h2">About</h2>
        <Row>
	       <Col s={12} l={6} m={12} className='About-photo'>
          <img src={me} alt='Steve Niebauer photo' />
          </Col>
	       <Col s={12} l={5} m={12} className='About-p'>
          <p>Experienced support manager with a demonstrated history of working in the tech industry with a focus on video. Skilled in community management, video production & editing, support operations, frontend development, and product.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
          <ul>
            <li>asdfasdfasdf</li>
            <li>asdfasdfasdf</li>
            <li>asdfasdfasdf</li>
            <li>asdfasdfasdf</li>
            <li>asdfasdfasdf</li>
            </ul>

          </Col>
        </Row>


      </Container>
    )
  }
}




export default About;
