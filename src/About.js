import React, { Component } from 'react';
import me from './sniebauer.gif';
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
          <p>Hi there! My name is Steve & I'm a support specialist in the video-tech industry. I got my start right out of school at a little video site called <a href="http://vimeo.com/" target="new">Vimeo</a>. I then moved on to help start & scale the product & support department at video startup, <a href="https://vimeo.com/226501794" target="new">VHX</a>, which <a href="https://techcrunch.com/2016/05/02/vimeo-acquires-vhx-to-boost-its-video-on-demand-business/" target="new">got aquired by Vimeo in 2016</a>. I then spent 2 years building out the OTT support team there. I am now at <a href="https://bitmovin.com/" target="new">Bitmovin</a>, helping shape the future of video online. I reside in Chicago with my wife, 2 boys, and dog, <a href="https://vimeo.com/35639629" target="new">Lucy</a>.</p>

          <p>Here are some things I know & like:</p>

          <ul className='About-ul'>
            <li className='About-li'>Support operations & management</li>
            <li className='About-li'>HTML/CSS/Javascript/React</li>
            <li className='About-li'><a href='https://www.jenlewis.website/chefs-kiss-emojis' target="new">The chef's kiss emoji</a></li>
            <li className='About-li'>Video production/editing/compression</li>
            <li className='About-li'>Indie games</li>
	    <li className='About-li'>Wearing a Hat</li>
          </ul>

          <p>Check out my <a href="https://www.linkedin.com/in/sniebauer/" target="new">LinkedIn</a> for the biz. Thanks!</p>

          </Col>
        </Row>


      </Container>
    )
  }
}




export default About;
