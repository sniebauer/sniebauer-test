import React, { Component } from 'react';
import './css/Work.css';
import WorkCarousel from './WorkCarousel.js'


class Work extends Component {
  render() {

    return (
      <div className='Work-div'>
        <h2 className='steves-h2'>Work</h2>
        <WorkCarousel />


      </div>
    )
  }
}


export default Work;
