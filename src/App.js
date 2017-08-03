import React, { Component } from 'react';
import './App.css';
import {Container} from 'react-materialize';
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


          <a name='work'></a>
            <section className='Work-s'>
              <Work />
            </section>



          <a name='about'></a>
            <section className='About-s'>
              <About />
            </section>




      <a name='contact'></a>
      <section className='Contact-s'>
      <Contact />
      </section>
      

      <Container>
      <section className='Footer-s'>
      <Footer />
      </section>
      </Container>

      </div>
    );
  }
}

export default App;
