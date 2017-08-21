import React, { Component } from 'react';
import {Col, Row,} from 'react-materialize';
import './css/Web.css';



class Web extends Component {
  render() {
    return (

      <div className='Web-div'>


      <table>
      	<tbody>
      		<tr>
      			<td>Alvin</td>
      			<td>Eclair</td>

      		</tr>
      		<tr>
      			<td>Alan</td>
      			<td>Jellybean</td>

      		</tr>
      		<tr>
      			<td>Jonathan</td>
      			<td>Lollipop</td>

      		</tr>
      	</tbody>
      </table>

        <h3>Various links:</h3>
        <ul>
          <li><a href="https://vimeo.com/blog/author/sniebauer" target="new">Vimeo Blog Postings</a> - Various blog posts and lessons written by me for the official Vimeo blog.</li>

          <li><a href="http://heydoggies.tumblr.com/" target="new">Hey Doggies!</a> - Tumblr site with curated photos and video of cute dogs, etc.</li>

          <li><a href="http://heydoggies.tumblr.com/" target="new">Hey Doggies!</a> - Tumblr site with curated photos and video of cute dogs, etc.</li>

          <li><a href="http://heydoggies.tumblr.com/" target="new">Hey Doggies!</a> - Tumblr site with curated photos and video of cute dogs, etc.</li>




        </ul>



      </div>

    )
  }
}



export default Web;
