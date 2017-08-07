import React, { Component } from 'react';
import {Row, Col, Modal, Container} from 'react-materialize';
import Vimeo from 'vimeo';
import './css/Video.css';
import ReactPlayer from 'react-player';
const V = Vimeo.Vimeo;


class Video extends Component {
  render() {
    let videos = this.props.data.map(function (videoData) {
      return (
	       <Col s={12} m={6} l={4} key={videoData.name}>
          <div key={videoData.name}>
            <Modal
	             header={videoData.name}
               fixedFooter
	             trigger={<div className='vimeo-modal-trigger'><a href='#'><img src={videoData.pictures.sizes[2].link_with_play_button} className='Vimeo-thumb'/><br />{videoData.name}</a></div>} key={videoData.name}>

               <div key={videoData.link}>
                <ReactPlayer url={videoData.link} width='100%' key={videoData.link} />
                </div>
                <p key={videoData.description}>{videoData.description} <a href={videoData.link} target='_new'>View on Vimeo →</a></p>
              </Modal>
            </div>
          </Col>



      )
    });

    return (
      <div className='vimeo-videos-grid'>
        <Row>
          <div>{videos}</div>
        </Row>
        <a href="https://vimeo.com/channels/sniebauer/" target="_new" className="btn-2">More videos →</a>
      </div>


    );
  }
}
export default Video;
