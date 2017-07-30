import React, { Component } from 'react';
import './css/WorkCarousel.css';
import {Carousel, Tabs, Tab} from 'react-materialize';
import Photos from "./Photos.js"



class WorkCarousel extends React.Component {
  render () {
    return (
      <Tabs className='Work-tabs'>
    		<Tab title="Video">Video</Tab>
    		<Tab title="Photo" active><Photos /></Tab>
    		<Tab title="Web">Web</Tab>
    </Tabs>
    );
  }
}


export default WorkCarousel;
