import "./App.css";
import React, { useRef, useEffect } from 'react';
import particlesConfig from "./particles.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import { tsParticles } from "tsparticles"
import Navbar from "./Components/Navbar";
import FakeNav from "./Components/FakeNav";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Timeline from './Components/Experience/Timeline';
import Portfolio from './Components/Portfolio/Portfolio-Con';
import ContactForm from './Components/Contact';
import Footer from './Components/Footer';
import Background from './Components/Background';
import Appgsap    from "./Appgsap";

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

/*<Particles
className="particles-canvas"
params={{
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 900
      }
    },
    shape: {
      type: "star",
      stroke: {
        width: 6,
        color: "#156307"
      }
    }
  }
}}
/>*/
