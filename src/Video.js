import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import Vimeo from 'vimeo';
const V = Vimeo.Vimeo;


class Video extends Component {
  render() {
    let videos = this.props.data.map(function (videoData) {

      return (

        <div key={videoData.name}>{videoData.name}</div>


      )
    });

    return (
      <div>{videos}</div>

    );
  }
}
export default Video;
