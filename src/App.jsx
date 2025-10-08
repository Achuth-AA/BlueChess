import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
  )
}

export default App
