import React, { Component } from 'react';
import './css/Work.css';
import WorkCarousel from './WorkCarousel.js'


class Work extends Component {
  render() {

    return (
      <div className='Work-div'>
        <h2 className='steves-h2'>Work</h2>
        <h3 className='steves-h3'>Video | Photo | Web</h3>
        <section className="Work-Carousel">
          <WorkCarousel />
        </section>

      </div>
    )
  }
}


export default Work;
