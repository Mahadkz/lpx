import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import PhiFixSection from './components/PhiFixSection';
import ValuePropSection from './components/ValuePropSection';
import ComparisonSection from './components/ComparisonSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PitchSection from './components/PitchSection';
import Footer from './components/Footer';
import MouseCursor from './components/MouseCursor';
import './components/styles/global-buttons.css';
// Remove previous fix file
// import './components/styles/section-buttons-fix.css'; 
import './components/styles/button-hover-fixes.css'; // Add new multi-solution file

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProblemSection />
      <PhiFixSection />
      <ValuePropSection />
      <ComparisonSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <PitchSection />
      <Footer />
      <MouseCursor />
    </div>
  );
}

export default App;
