import React, { Component } from 'react';
import './css/Videos.css';
import {Row, Col, Container} from 'react-materialize';



class Videos extends Component {
  render() {

    return (
      <div className='Videos-div'>
        <h1>Videos</h1>


        <Row>
          <Col s={12} m={4} l={4}>Video 1</Col>
          <Col s={12} m={4} l={4}>Video 2</Col>
          <Col s={12} m={4} l={4}>Video 3</Col>
          </Row>
        <Row>
          <Col s={12} m={4} l={4}>Video 4</Col>
          <Col s={12} m={4} l={4}>Video 5</Col>
          <Col s={12} m={4} l={4}>Video 6</Col>
          </Row>
        <Row>
          <Col s={12} m={4} l={4}>Video 7</Col>
          <Col s={12} m={4} l={4}>Video 8</Col>
          <Col s={12} m={4} l={4}>Video 9</Col>
          </Row>
          



      </div>
    )
  }
}


export default Videos;
