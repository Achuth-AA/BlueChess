import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
    </div>
  );
}

export default LandingPage;
