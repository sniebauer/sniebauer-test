import React, { Component } from 'react';
import {Row, Col, Modal} from 'react-materialize';
import Vimeo from 'vimeo';
import './css/Video.css';
import ResponsiveEmbed from 'react-responsive-embed';
const V = Vimeo.Vimeo;


class Video extends Component {

  render() {

    let videos = this.props.data.map(function (videoData) {

      let vId = videoData.uri.split('/').pop();
      let vimEmbedId = 'https://player.vimeo.com/video/' + vId;
      //console.log(vimEmbedId);

      return (
	       <Col s={12} m={6} l={4} key={videoData.name}>
          <div key={videoData.name}>
            <Modal
	             header={videoData.name}
               
	             trigger={<div className='vimeo-modal-trigger'><a href='#' className="Video-links"><img src={videoData.pictures.sizes[2].link_with_play_button} className='Vimeo-thumb' alt={videoData.name} /><br />{videoData.name}</a></div>} key={videoData.name}>

               <div key={videoData.link}>
                <ResponsiveEmbed src={vimEmbedId} allowFullScreen key={videoData.link} />
                </div>
                <p className='vimDesc' key={videoData.description}>{videoData.description} <br /><br /><a href={videoData.link} target='_new'>Watch {videoData.name} on Vimeo →</a></p>
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
