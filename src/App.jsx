import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About'
import Experience from './components/experience/Experience';
import Protfolio from './components/protfolio/protfolio';
import Contact from './components/contact/Contact';



function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Protfolio title="Full Stack"/>
      <Contact />     
    </div>
  );
}

export default App;
