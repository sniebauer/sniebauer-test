import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import './css/Title.css'


class Title extends Component {
  render() {
    let name = 'SNIEBAUER';
    return (
      <div className='Title-div'>
        <h1 className='steves-h1'>{name}</h1>
        <video autoPlay loop id="Video-background" muted >
        <source src="https://player.vimeo.com/external/223207383.sd.mp4?s=ca8f996e038f9676104d64387db2e38140ab2d3a&profile_id=165" type="video/mp4" />
        </video>
        <Row>
          <Col l={6} s={0}></Col>
          <Col l={3} s={12}>
            <p>Experienced support manager with a demonstrated history of working in the tech industry with a focus on video. Skilled in community management, video production & editing, support operations, frontend development, and product.</p>
          </Col>
        </Row>


      </div>
    )
  }
}




export default Title;
