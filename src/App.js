import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Title from './Title.js';
import About from './About.js';
import Work from './Work.js';
import Contact from './Contact.js';
import Footer from './Footer.js';





class App extends Component {



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
