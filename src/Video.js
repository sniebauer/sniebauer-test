import React, { Component } from 'react';
import {Row, Col, Modal} from 'react-materialize';
import Vimeo from 'vimeo';
const V = Vimeo.Vimeo;


class Video extends Component {
  render() {
    let videos = this.props.data.map(function (videoData) {

      return (


	       <Col s={12} m={6} l={4} >
          <div key={videoData.name}>
            <Modal
	             header={videoData.name}
	             trigger={<div><img src={videoData.pictures.sizes[2].link_with_play_button}/><br />{videoData.name}</div>}>
	             <div><span dangerouslySetInnerHTML={{__html: videoData.embed.html}} /><br /><br />{videoData.description}</div>
              </Modal>
            </div>
          </Col>



      )
    });

    return (
      <Row>
      <div>{videos}</div>
      </Row>

    );
  }
}
export default Video;
