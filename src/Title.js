import React, { Component } from 'react';
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


      </div>
    )
  }
}




export default Title;
