import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Title from './Title.js';
import About from './About.js';
import Work from './Work.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()


var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};


class App extends Component {
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


  render() {


    return (
      <div className="App">
        <section className='behind-title'>
          <section className='Header-s'>
            <Header />
          </section>


          <section className='Title-s'>
            <Title />
          </section>
        </section>

        <section className='below-title'>


          <section className='Work-s' id='work'>
              <Work />
          </section>


          <section className='About-s' id='about'>
            <About />
          </section>


          <section className='Contact-s' id='contact'>
            <Contact />
          </section>

          <section className='Footer-s'>
            <Footer />
          </section>


      </section>

      </div>
    );
  }
}

export default App;
