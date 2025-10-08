import React from 'react';

const BentoGrid = () => {
  const features = [
    {
      title: "Play Online",
      description: "Challenge players from around the world in real-time matches",
      icon: "♔",
      gradient: "from-purple-500 to-pink-500",
      size: "large"
    },
    {
      title: "AI Opponent",
      description: "Practice against our advanced AI chess engine",
      icon: "🤖",
      gradient: "from-blue-500 to-cyan-500",
      size: "small"
    },
    {
      title: "Tournaments",
      description: "Join daily tournaments and compete for prizes",
      icon: "🏆",
      gradient: "from-orange-500 to-red-500",
      size: "small"
    },
    {
      title: "Learn & Improve",
      description: "Access thousands of lessons, puzzles, and opening theories to master your game",
      icon: "📚",
      gradient: "from-green-500 to-emerald-500",
      size: "large"
    },
    {
      title: "Game Analysis",
      description: "Deep analysis of your games with AI-powered insights",
      icon: "📊",
      gradient: "from-violet-500 to-purple-500",
      size: "small"
    },
    {
      title: "Live Streaming",
      description: "Watch grandmasters and learn from the best",
      icon: "📺",
      gradient: "from-pink-500 to-rose-500",
      size: "small"
    }
  ];

  return (
    <div className="relative w-full py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Master Chess
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From beginner to grandmaster, we have all the tools you need
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[240px]">
          {/* Large card 1 - spans 2 columns */}
          <div className="group relative md:col-span-2 row-span-1 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full p-8 flex flex-col justify-between">
              <div>
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {features[0].icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{features[0].title}</h3>
                <p className="text-slate-300">{features[0].description}</p>
              </div>
              <div className="flex items-center text-purple-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Start Playing
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Small card 1 */}
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">
                  {features[1].icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{features[1].title}</h3>
                <p className="text-sm text-slate-300">{features[1].description}</p>
              </div>
            </div>
          </div>

          {/* Small card 2 */}
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">
                  {features[2].icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{features[2].title}</h3>
                <p className="text-sm text-slate-300">{features[2].description}</p>
              </div>
            </div>
          </div>

          {/* Small card 3 */}
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-900/40 to-purple-900/40 border border-violet-500/20 hover:border-violet-400/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">
                  {features[4].icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{features[4].title}</h3>
                <p className="text-sm text-slate-300">{features[4].description}</p>
              </div>
            </div>
          </div>

          {/* Large card 2 - spans 2 columns */}
          <div className="group relative md:col-span-2 row-span-1 rounded-3xl overflow-hidden bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/20 hover:border-green-400/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full p-8 flex flex-col justify-between">
              <div>
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {features[3].icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{features[3].title}</h3>
                <p className="text-slate-300">{features[3].description}</p>
              </div>
              <div className="flex items-center text-green-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Explore Lessons
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Small card 4 */}
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-pink-900/40 to-rose-900/40 border border-pink-500/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">
                  {features[5].icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{features[5].title}</h3>
                <p className="text-sm text-slate-300">{features[5].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
