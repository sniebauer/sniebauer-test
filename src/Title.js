import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
<<<<<<< HEAD
import './css/Title.css'
import ScrollReveal from 'scrollreveal';
=======
import './css/Title.css';
>>>>>>> 3d4df1069905ab6c620f21f66359e23743df2fe8


class Title extends Component {
  componentDidMount = () => {
      const config = {
            origin: 'bottom',
            duration: 4000,
            delay: 500,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            reset: false,
            opacity: 0,
            mobile: true,
            viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
            rotate: { x: 5, y: 10, z: 5 },
            viewFactor: .9,


          }
          ScrollReveal().reveal(this.refs.box1, config)
        }



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
