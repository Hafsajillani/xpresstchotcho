import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home-page.jsx';
import AboutUs from './components/ourstory/About.jsx';
import PersonalHome from './components/personalLoans/PHome.jsx';
import ContactUs from './components/Contact-us.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for base path */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/personal-loan" element={<PersonalHome />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
