import React, { Component } from 'react';
import './css/Photos.css'
import {Carousel, Tabs, Tab, MediaBox, Container} from 'react-materialize';


class Photos extends Component {
  render() {
    return (

      <div className='photos-div'>
      <section className='photo-carousel'>
      <Carousel options={{ fullWidth: true,
        indicators: true
      }} images={[
        "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/301e13c7-3a2f-4aa4-891a-5487373029c8.jpg",
      "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/41f003ed-33c4-42c0-b89f-3ef9f56eb2a0.jpg",
      "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/69fec16b-3274-40a6-8ec4-d983217377b0.jpg",
      "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/f1a7c936-9d54-46bd-a751-3fd3763d0155.jpg",
      "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/cbcdcd3f-d90e-4d6d-b6d9-0392ccbec87a/IMG_1418.jpg",
      "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/0f476386-0354-400e-b014-2b5c24901b84.jpg",
      "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/a1531909-0837-4304-827f-0fdc8c9909d8.jpg",
      "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/6b7ed9ef-8346-4d9b-b148-ccc96e591947.jpg",
      "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/7948416a-a6a0-4afd-9500-5e3b7951f289.jpg",
      "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/20c8006b-36de-4a84-8b84-75e790622690.jpg",
      "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/b6a26500-b53d-4cf6-be28-f22ed098aa16.jpg",
      "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/60d143ef-9ec1-4f5f-826b-22dc91c98444.jpg",
      "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/54adb50b-7f8d-4a3a-9ea7-058225e2f6b4.jpg",
      "https://dr56wvhu2c8zo.cloudfront.net/sniebauer/assets/caf4ccb7-1e79-4555-9e30-eb111099513e.jpg"
    ]} / >
    </section>

      <a href="http://pizzatrees.tumblr.com/" target="_new" className="btn-2">More photos</a>
      </div>

    )
  }
}

export default Photos;
