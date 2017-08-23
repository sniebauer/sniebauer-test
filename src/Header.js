import React, { Component } from 'react';
import './css/Header.css';
import {Row, Col} from 'react-materialize';
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()
import ScrollReveal from 'scrollreveal';
var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};



class Header extends Component {
  constructor (props){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {

      Events.scrollEvent.register('begin', function() {
        console.log("begin", arguments);
      });

      Events.scrollEvent.register('end', function() {
        console.log("end", arguments);
      });

      scrollSpy.update();

    }
    scrollToTop() {
      scroll.scrollToTop();
    }
    componentWillUnmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }

    componentDidMount = () => {
        const config = {
              origin: 'bottom',
              duration: 2500,
              delay: 1500,
              distance: '100px',
              scale: 1,
              easing: 'ease',
              reset: true,
              opacity: 0,
              mobile: true,
              viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
              rotate: { x: 5, y: 10, z: 5 },
              viewFactor: .9,


            }
            ScrollReveal().reveal(this.refs.box2, config)
          }

  render() {

    return (
      <div className="App-header" >




      <Row>
      <Col s={12}>

        <ul >
          <li className='Header-li'><Link className='Header-a' to="work" spy={true} smooth={true} duration={500} offset={-100} >Work</Link></li>
          <li className='Header-li'><Link className='Header-a' to="about" spy={true} smooth={true} duration={500} offset={-100} >About</Link></li>
          <li className='Header-li'><Link className='Header-a' to="contact" spy={true} smooth={true} duration={500} offset={-100} >Contact</Link></li>
          </ul>
          </Col>
          </Row>
      </div>




    )
  }
}


export default Header;
