import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Title from './Title.js';
import About from './About.js';
import Work from './Work.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import ScrollEvent from 'react-onscroll';



class App extends Component {

<<<<<<< HEAD


=======
componentDidMount = () => {
    const config = {
          origin: 'bottom',
          duration: 1000,
          delay: 200,
          distance: '100px',
          scale: 1,
          easing: 'ease',
          reset: false,
          opacity: 0,
          mobile: true,
          viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
          rotate: { x: 5, y: 10, z: 5 },
          viewFactor: .1,


        }
        ScrollReveal().reveal(this.refs.box1, config)

      }
>>>>>>> 3d4df1069905ab6c620f21f66359e23743df2fe8





  render() {


    return (
      <div className="App" >


        <section className='behind-title' >
          <section className='Header-s'>
            <Header />
          </section>

          <section className='Title-s'>
            <Title />
          </section>
        </section>

<<<<<<< HEAD
        <div className='logo-fade'>
=======
        <div className='logo-fade' ref='box1'>
>>>>>>> 3d4df1069905ab6c620f21f66359e23743df2fe8
          <h4>SNIEBAUER</h4>
        </div>

        <section className='below-title'>


          <section className='Work-s' id='work' >
              <Work />
          </section>


          <section className='About-s' id='about' >
            <About />
          </section>


          <section className='Contact-s' id='contact' >
            <Contact />
          </section>

          <section className='Footer-s' >
            <Footer />
          </section>


      </section>

      </div>
    );
  }
}

export default App;
