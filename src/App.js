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

        <section className='Header-s'>
          <Header />
        </section>

        <section className='Title-s'>
          <Title />
        </section>

        <a name='about'></a>
        <section className='About-s'>
          <About />
        </section>

        <a name='work'></a>
        <section className='Work-s'>
          <Work />
        </section>

        <a name='contact'></a>
        <section className='Contact-s'>
          <Contact />
        </section>

        <section className='Footer-s'>
          <Footer />
        </section>

      </div>
    );
  }
}

export default App;
