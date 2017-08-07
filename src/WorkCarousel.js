import React, { Component } from 'react';
import './css/WorkCarousel.css';
import { Tabs, Tab} from 'react-materialize';
import Photos from "./Photos.js";
import Video from './Video.js'
import Vimeo from 'vimeo';
const V = Vimeo.Vimeo;







class WorkCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }

  }

  componentDidMount() {

    let CLIENT_ID = '2641a5b5b2e7f5bf64b87e9ccc66fe3812faf7b7';
    let CLIENT_SECRET = 'xFzLHKsQuhhrBpq2teTxe0ZbFFN02DVMnPyOr9VEHN9HiXRjNEu01tumSZe9gtLNR0U1JweqVRxIBO0Av1BUWXJaNAd0ZntTwwfDKW5ViFlH6duj9nRhUh8gnx4SEbUN';
    let token = ''
    const lib = new V(CLIENT_ID, CLIENT_SECRET);
    let base = this;
    lib.generateClientCredentials(['public'], function (err, access_token) {
        if (err) {
          throw err;
        }

        let token = access_token.access_token;

        // Other useful information is included alongside the access token
        // We include the final scopes granted to the token. This is important because the user (or api) might revoke scopes during the authentication process
        let scopes = access_token.scope;
        console.log('token info', token, scopes);
    });
    lib.request(/*options*/{
      // This is the path for the videos contained within the staff picks channels
      path : '/channels/sniebauer/videos?filter=embeddable&filter_embeddable=true&sort=manual',
      // This adds the parameters to request page two, and 10 items per page
      query : {
          page : 1,
          per_page : 9,
          fields: 'uri,link,name,description,duration,embed,pictures'
      }
    }, /*callback*/function (error, body, status_code, headers) {
      if (error) {
          console.log('error');
          console.log(error);
      } else {
          console.log('body');
          console.log(body);


      }

      console.log(body);
      base.setState({
        data: body.data,

      })





      console.log(body.data);
      //console.log('status code');
      // console.log(status_code);
      // console.log('headers');
      // console.log(headers);

    });


  }

  render () {
    return (

      <Tabs className='Work-tabs' >
        <Tab title="Photo" className='Work-tab'><Photos /></Tab>
        <Tab title="Video" active className='Work-tab'><Video data={this.state.data} /></Tab>
    		<Tab title="Web" className='Work-tab'> ¯\_(ツ)_/¯</Tab>
    </Tabs>

    );
  }
}


export default WorkCarousel;
