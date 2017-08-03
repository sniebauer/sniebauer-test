import React, { Component } from 'react';
import './css/WorkCarousel.css';
import {Carousel, Tabs, Tab, Container} from 'react-materialize';
import Photos from "./Photos.js"



class WorkCarousel extends React.Component {
  render () {
    return (

      <Tabs className='Work-tabs' >
    		<Tab title="Video" className='Work-tab'>Video</Tab>
    		<Tab title="Photo" active className='Work-tab'><Photos /></Tab>
    		<Tab title="Web" className='Work-tab'>Web</Tab>
    </Tabs>

    );
  }
}


export default WorkCarousel;
