import React from 'react';
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Education/>
      <Experience/>
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
