import React, { Component } from 'react';
import me from './me.jpg';
import './About.css';

class About extends Component {
  render() {

    return (
      <div className='About-div'>
        <h2 className="steves-h2">About</h2>
        <img src={me} alt='Steve Niebauer photo' />
        <p id='about-p'>Experienced support manager with a demonstrated history of working in the tech industry with a focus on video. Skilled in community management, video production & editing, support operations, frontend development, and product.</p>
      </div>
    )
  }
}




export default About;
