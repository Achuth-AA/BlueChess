import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex overflow-hidden">
      {/* Full screen geometric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Geometric patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Chess board pattern */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
          {[...Array(64)].map((_, i) => {
            const row = Math.floor(i / 8);
            const col = i % 8;
            const isLight = (row + col) % 2 === 0;
            return (
              <div
                key={i}
                className={`${
                  isLight ? 'bg-white/[0.02]' : 'bg-black/10'
                } border border-white/[0.02]`}
              ></div>
            );
          })}
        </div>

        {/* Chess notation - Letters (a-h) at bottom */}
        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-8 text-white/40 text-xs font-semibold">
          {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((letter) => (
            <div key={letter} className="text-center py-2">
              {letter}
            </div>
          ))}
        </div>

        {/* Chess notation - Numbers (1-8) at left */}
        <div className="absolute top-0 left-0 bottom-0 grid grid-rows-8 text-white/40 text-xs font-semibold">
          {[8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
            <div key={num} className="flex items-center px-2">
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* Left side - Form */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center p-6 overflow-y-auto">
        <div className="w-full max-w-sm">
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Header section with gradient */}
            <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 p-6 text-center">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-3 border border-white/20">
                  <span className="text-3xl">♔</span>
                </div>
                <h1 className="text-2xl font-bold text-white mb-1">Welcome Back</h1>
                <p className="text-sm text-blue-100/80">Sign in to continue to Blue Chess</p>
              </div>
            </div>

            {/* Form section */}
            <div className="p-6 bg-slate-900/60 backdrop-blur-xl">
              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-xs backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </div>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-200">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 backdrop-blur-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-slate-200">Password</label>
                    <button type="button" className="text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      Forgot?
                    </button>
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 backdrop-blur-sm"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing In...
                    </span>
                  ) : 'Sign In'}
                </button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-slate-700"></div>
                <span className="px-3 text-slate-500 text-xs font-medium">OR</span>
                <div className="flex-1 border-t border-slate-700"></div>
              </div>

              {/* Register Link */}
              <div className="text-center">
                <p className="text-slate-400 text-xs">
                  Don't have an account?{' '}
                  <Link
                    to="/register"
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-slate-300 text-xs mt-6">
            © 2025 Blue Chess · Master your moves
          </p>
        </div>
      </div>

      {/* Right side - Decorative chess elements (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative z-10">
        <div className="text-center">
          <img src="/chess.png" alt="Chess" className="w-80 h-80 object-contain mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold text-white mb-3">Master Your Strategy</h2>
          <p className="text-slate-300 text-base max-w-md mx-auto">
            Challenge players worldwide in the ultimate chess experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
