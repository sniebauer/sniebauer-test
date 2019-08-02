import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import './css/Title.css';




class Title extends Component {




  render() {
    let name = 'SNIEBAUER';
    return (
      <div className='Title-div'>
        <h1 className='steves-h1'>{name}</h1>
        <video autoPlay loop id="Video-background" muted poster="https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/7948416a-a6a0-4afd-9500-5e3b7951f289.jpg">
        <source src="https://player.vimeo.com/external/230688029.sd.mp4?s=3ede1b14406683aeb76fa390613005baf056d15c&profile_id=165" type="video/mp4" />
        </video>
        <Row>
          <Col l={6} s={0}></Col>
          <Col l={3} s={12}>
            <p></p>
          </Col>
        </Row>


      </div>
    )
  }
}




export default Title;
