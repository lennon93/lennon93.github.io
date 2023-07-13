import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Knowledges from '../components/Knowledges';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Achievements from '../components/Achievements';

const Portfolio: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Knowledges />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default Portfolio;
