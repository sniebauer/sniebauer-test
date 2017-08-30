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
          <p>Hi there! My name is Steve & I'm a support manager in the video-tech industry. I got my start right out of school at a little video site called <a href="http://vimeo.com/" target="new">Vimeo</a>. I then moved on to help start & scale the product & support department at video startup, <a href="https://vimeo.com/226501794" target="new">VHX</a>, which <a href="https://techcrunch.com/2016/05/02/vimeo-acquires-vhx-to-boost-its-video-on-demand-business/" target="new">got aquired by Vimeo in 2016</a>, where I am currently employed (again). I reside in Chicago with my wife, active son, <a href="#top">Felix</a>, and dog, <a href="https://vimeo.com/35639629" target="new">Lucy</a>.</p>

          <p>Here are some things I know & like:</p>

          <ul className='About-ul'>
            <li className='About-li'>Support operations/community management</li>
            <li className='About-li'>HTML/CSS/Javascript</li>
            <li className='About-li'>React JS</li>
            <li className='About-li'>Video editing with Adobe & Apple products</li>
            <li className='About-li'>Video production</li>
            <li className='About-li'>Photography</li>
            <li className='About-li'>Video games</li>
          </ul>

          <p>Check out my <a href="https://www.linkedin.com/in/sniebauer/" target="new">LinkedIn</a> & <a href="https://github.com/sniebauer" target="new">GitHub</a> pages for more.</p>

          </Col>
        </Row>


      </Container>
    )
  }
}




export default About;
