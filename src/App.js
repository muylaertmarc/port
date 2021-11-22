import "./App.css";
import React, { useRef, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Timeline from './Components/Experience/Timeline';
import Portfolio from './Components/Portfolio/Portfolio-Con';
import ContactForm from './Components/Contact';
import Footer from './Components/Footer';
import Background from './Components/Background';
import Appgsap    from "./Appgsap";
import "./Appgsap.css"

function App() {

  return (
    <div>     
      <Background />
      <Appgsap />
      <Navbar />
      <Header />
      <AboutMe /> 
      <Skills />
      <Timeline />
      <Portfolio />
      <ContactForm />
      <Footer /> 
    </div>
  );
}

export default App;

