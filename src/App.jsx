import React from 'react';
import HomePage from './components/Home-page.jsx';
import Testimonials from './components/Testimonials-section.jsx';
import ServiceCard from './components/Services.jsx';
import LoanSteps from './components/Steps.jsx';
import AboutUs from './components/About.jsx';


const App = () => {
  return (
    <div>
      <HomePage />
      <AboutUs/>
      <ServiceCard/>
      <LoanSteps/>
      <Testimonials />
    </div>
  );
};

export default App;
