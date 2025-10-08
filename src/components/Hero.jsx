import React, { useEffect, useState } from 'react';

const ChessPieceEvolution = () => {
  const [currentPiece, setCurrentPiece] = useState(0);
  const [fadeState, setFadeState] = useState('in');

  const pieces = [
    { symbol: '♟', name: 'PAWN', color: '#94a3b8' },
    { symbol: '♞', name: 'KNIGHT', color: '#60a5fa' },
    { symbol: '♝', name: 'BISHOP', color: '#22d3ee' },
    { symbol: '♜', name: 'ROOK', color: '#a855f7' },
    { symbol: '♛', name: 'QUEEN', color: '#ec4899' },
    { symbol: '♚', name: 'KING', color: '#fbbf24' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setCurrentPiece((prev) => (prev + 1) % pieces.length);
        setFadeState('in');
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Chess Icon Display */}
      <div className={`relative transition-all duration-500 ${fadeState === 'in' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div
          className="text-9xl font-bold transition-all duration-500"
          style={{ color: pieces[currentPiece].color }}
        >
          {pieces[currentPiece].symbol}
        </div>

        {/* Glowing effect */}
        <div
          className="absolute inset-0 blur-3xl opacity-50 -z-10 transition-all duration-500"
          style={{
            background: `radial-gradient(circle, ${pieces[currentPiece].color} 0%, transparent 70%)`
          }}
        ></div>
      </div>

      {/* Piece Name */}
      <div className={`mt-6 text-center transition-all duration-500 ${fadeState === 'in' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div
          className="text-xl font-bold font-mono transition-colors duration-500"
          style={{ color: pieces[currentPiece].color }}
        >
          {'> '}{pieces[currentPiece].name}
        </div>
        <div className="text-slate-600 text-xs mt-1 font-mono">
          [{currentPiece + 1}/6] Evolution Level
        </div>
      </div>

      {/* Evolution Progress Bar */}
      <div className="w-full max-w-xs mt-6 bg-slate-800/50 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full transition-all duration-700 ease-out rounded-full"
          style={{
            width: `${((currentPiece + 1) / pieces.length) * 100}%`,
            backgroundColor: pieces[currentPiece].color
          }}
        ></div>
      </div>

      {/* Dots indicator */}
      <div className="flex gap-2 mt-6">
        {pieces.map((piece, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: index === currentPiece ? pieces[currentPiece].color : '#334155',
              transform: index === currentPiece ? 'scale(1.3)' : 'scale(1)',
              boxShadow: index === currentPiece ? `0 0 8px ${pieces[currentPiece].color}` : 'none'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm transform transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span className="text-purple-300 text-sm font-medium">Online Chess Platform</span>
            </div>

            {/* Main heading with stagger animation */}
            <div className="space-y-4">
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight transform transition-all duration-700 delay-100 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
              >
                Play Chess
              </h1>
              <h2
                className={`text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight transform transition-all duration-700 delay-200 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
              >
                Like Never Before
              </h2>
            </div>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl transform transition-all duration-700 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              Join thousands of players worldwide. Master strategies, compete in tournaments, and improve your game with AI-powered analysis.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-400 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  Start Playing Free
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="px-8 py-4 bg-transparent hover:bg-white/5 text-white font-semibold rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div
              className={`flex flex-wrap gap-8 pt-4 transform transition-all duration-700 delay-500 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div>
                <div className="text-3xl font-bold text-white mb-1">50K+</div>
                <div className="text-sm text-slate-400">Active Players</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">1M+</div>
                <div className="text-sm text-slate-400">Games Daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">4.9★</div>
                <div className="text-sm text-slate-400">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right side - Chess GIF */}
          <div
            className={`hidden lg:block transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-10 opacity-0 scale-95'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30">
              {/* Glowing effect behind GIF */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-blue-600/30 blur-3xl -z-10"></div>

              {/* Chess GIF */}
              <div className="relative w-full h-[600px] flex items-center justify-center bg-slate-900/50">
                <img
                  src="https://media.tenor.com/4TcoAC_uquwAAAAM/magnus-carlsen-magnus.gif"
                  alt="Magnus Carlsen Chess"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features cards at bottom */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 transform transition-all duration-700 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Quick Match</h3>
            <p className="text-sm text-slate-400">Find opponents instantly and start playing in seconds</p>
          </div>

          <div className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Learn & Analyze</h3>
            <p className="text-sm text-slate-400">Improve with lessons, puzzles, and game analysis</p>
          </div>

          <div className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Tournaments</h3>
            <p className="text-sm text-slate-400">Compete globally and climb the leaderboard</p>
          </div>
        </div>
      </div>

      {/* Custom animations in style tag */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
          opacity: 0.6;
        }
        @keyframes dotPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(0.95);
          }
        }
        @keyframes drawLine {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes piece-evolve {
          0% {
            transform: scale(1) rotateY(0deg);
          }
          25% {
            transform: scale(1.1) rotateY(90deg);
          }
          50% {
            transform: scale(1.2) rotateY(180deg);
          }
          75% {
            transform: scale(1.1) rotateY(270deg);
          }
          100% {
            transform: scale(1) rotateY(360deg);
          }
        }
        .animate-piece-evolve {
          animation: piece-evolve 2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;
