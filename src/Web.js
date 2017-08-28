import React, { Component } from 'react';
import {Col, Row,} from 'react-materialize';
import './css/Web.css';



class Web extends Component {
  render() {
    return (

      <div className='Web-div'>

        <ul className="Web-ul">
          <li className="Web-li"><a href="https://vimeo.com/blog/author/sniebauer" target="new">Vimeo Blog Postings</a> - Various blog posts and lessons written by me for the official Vimeo blog.</li>

          <li className="Web-li"><a href="http://help.vhx.tv/" target="new">VimeoVHX Seller Support</a> - The official help center for VimeoVHX sellers - run on Help Scout & written by me.</li>

          <li className="Web-li"><a href="http://support.vhx.tv/" target="new">VimeoVHX Customer Support</a> - The official help center for VimeoVHX customers - run on Help Scout & written by me.</li>

          <li className="Web-li"><a href="http://heydoggies.tumblr.com/" target="new">Hey Doggies!</a> - Tumblr site with curated photos and video of cute dogs, etc.</li>


        </ul>

      </div>

    )
  }
}



export default Web;
