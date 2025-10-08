import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <BentoGrid />
    </div>
  );
}

export default LandingPage;
