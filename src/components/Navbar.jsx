import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-lg shadow-purple-500/30">
              <span className="text-2xl">♛</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Blue Chess
              </h1>
              <p className="text-[10px] text-slate-400 -mt-1">Master Your Moves</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#play" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              Play
            </a>
            <a href="#learn" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              Learn
            </a>
            <a href="#tournaments" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              Tournaments
            </a>
            <a href="#leaderboard" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              Leaderboard
            </a>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                Logout
              </button>
              <button className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg shadow-lg shadow-purple-500/30 transition-all duration-300">
                Play Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#play" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Play
              </a>
              <a href="#learn" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Learn
              </a>
              <a href="#tournaments" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Tournaments
              </a>
              <a href="#leaderboard" className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Leaderboard
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Logout
                </button>
                <button className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg shadow-lg shadow-purple-500/30 transition-all duration-300">
                  Play Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
