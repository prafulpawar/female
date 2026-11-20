import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, User, ArrowRight, CheckCircle2, ArrowLeft, AlertCircle, ShieldCheck } from 'lucide-react';
import { ORG_DATA } from '../../data/fbfData';

export default function FBFLoginPage({ theme = 't1', onNavigate }) {
  // Mode: 'signin' | 'signup'
  const [mode, setMode] = useState('signin');

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('scholar');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Status & Feedback States
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  // Theme-aware button & accent colors
  const themeColors = {
    t1: {
      btn: 'bg-[#D48B28] hover:bg-[#B45309]',
      text: 'text-[#D48B28]',
      ring: 'focus:border-[#D48B28] focus:ring-[#D48B28]/20',
      badge: 'bg-amber-50 text-[#D48B28] border-amber-200'
    },
    t2: {
      btn: 'bg-[#BE185D] hover:bg-[#9d174d]',
      text: 'text-[#BE185D]',
      ring: 'focus:border-[#BE185D] focus:ring-[#BE185D]/20',
      badge: 'bg-rose-50 text-[#BE185D] border-rose-200'
    },
    t3: {
      btn: 'bg-[#873F50] hover:bg-[#6e3140]',
      text: 'text-[#873F50]',
      ring: 'focus:border-[#873F50] focus:ring-[#873F50]/20',
      badge: 'bg-[#F7E8E8] text-[#873F50] border-[#D68D82]/40'
    }
  };

  const currentTheme = themeColors[theme] || themeColors.t1;

  // Handle Sign In Submit
  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 700);
  };

  // Handle Sign Up Submit
  const handleSignUp = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please re-enter.');
      return;
    }

    if (!termsAccepted) {
      setError('Please accept the community guidelines and privacy policy to continue.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 700);
  };

  // Handle Forgot Password Reset
  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter your email to receive a password reset link.');
      return;
    }
    setResetSent(true);
    setTimeout(() => {
      setResetSent(false);
      setForgotOpen(false);
    }, 3000);
  };

  // SUCCESS STATE (Both Sign In & Sign Up)
  if (isSuccess) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-[#FAF8F5] text-stone-900 font-dm">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-stone-200 text-center space-y-6 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-stone-900">
              {mode === 'signup' ? 'Account Created Successfully!' : 'Welcome Back!'}
            </h2>
            <p className="text-xs text-stone-600">
              {mode === 'signup' ? (
                <>Welcome to Future Black Female, <strong className="text-stone-900">{name}</strong>. Confirmation link sent to <strong className="font-mono text-stone-900">{email}</strong>.</>
              ) : (
                <>You are signed in as <strong className="font-mono text-stone-900">{email}</strong></>
              )}
            </p>
          </div>

          <div className="pt-2 space-y-3">
            <button
              onClick={() => onNavigate('home')}
              className={`w-full py-3.5 rounded-full ${currentTheme.btn} text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer`}
            >
              <span>Continue to Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setIsSuccess(false);
                setPassword('');
                setConfirmPassword('');
              }}
              className="w-full py-2.5 text-xs text-stone-500 hover:text-stone-800 font-semibold transition-colors cursor-pointer"
            >
              Sign out / Use another account
            </button>
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT VIEW: TOGGLE BETWEEN SIGN IN AND SIGN UP
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 py-16 bg-[#FAF8F5] text-stone-900 font-dm">
      
      {/* Back to Home Link */}
      <div className="w-full max-w-md mb-6">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Main Authentication Card */}
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-stone-200/90 text-left space-y-6 animate-fade-in">
        
        {/* Logo & Header */}
        <div className="text-center space-y-3">
          <img
            src="/images/live_site/header_logo.png"
            alt="Future Black Female"
            className="h-9 mx-auto object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/branded/fbf-logo.png';
            }}
          />
          <div>
            <h1 className="text-2xl font-bold text-stone-900 tracking-tight">
              {mode === 'signup' ? 'Create an Account' : 'Sign In'}
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              {mode === 'signup' 
                ? 'Join Future Black Female to access scholarships & programs' 
                : 'Enter your credentials to access your account'}
            </p>
          </div>
        </div>

        {/* Clean Segmented Tab Switcher */}
        <div className="flex rounded-full bg-stone-100 p-1 text-xs font-semibold">
          <button
            type="button"
            onClick={() => { setMode('signin'); setError(''); }}
            className={`flex-1 py-2 rounded-full transition-all cursor-pointer ${
              mode === 'signin' 
                ? 'bg-white text-stone-900 shadow-xs font-bold' 
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setMode('signup'); setError(''); }}
            className={`flex-1 py-2 rounded-full transition-all cursor-pointer ${
              mode === 'signup' 
                ? 'bg-white text-stone-900 shadow-xs font-bold' 
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2 animate-fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
            <span>{error}</span>
          </div>
        )}

        {/* ----------------- SIGN IN FORM ----------------- */}
        {mode === 'signin' && (
          <form onSubmit={handleSignIn} className="space-y-4">
            
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 ${currentTheme.ring} text-sm outline-none transition-all`}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setForgotOpen(!forgotOpen)}
                  className={`text-xs font-semibold ${currentTheme.text} hover:underline cursor-pointer`}
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-11 py-2.5 rounded-xl border border-stone-300 ${currentTheme.ring} text-sm outline-none transition-all`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-700 cursor-pointer"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Forgot Password Accordion */}
            {forgotOpen && (
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2.5 animate-fade-in">
                {resetSent ? (
                  <div className="text-emerald-700 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Password reset instructions sent to your email!</span>
                  </div>
                ) : (
                  <>
                    <p className="text-stone-600">
                      We'll send a secure password reset link to your email address.
                    </p>
                    <button
                      type="button"
                      onClick={handleForgotSubmit}
                      className={`px-3.5 py-1.5 rounded-lg ${currentTheme.btn} text-white font-bold text-xs uppercase tracking-wider cursor-pointer`}
                    >
                      Send Reset Link
                    </button>
                  </>
                )}
              </div>
            )}

            {/* Remember Me */}
            <div className="flex items-center justify-between text-xs text-stone-600 pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-stone-900 border-stone-300 focus:ring-0 cursor-pointer"
                />
                <span>Remember me</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3.5 rounded-full ${currentTheme.btn} text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-70 mt-2`}
            >
              {isLoading ? (
                <span>Signing in...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Demo Quick-Fill Helper for Testing */}
            <div className="pt-2 border-t border-stone-100 text-center">
              <button
                type="button"
                onClick={() => {
                  setEmail('member@futureblackfemale.com');
                  setPassword('FBFmember2024!');
                  setError('');
                }}
                className="text-[11px] font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
              >
                Fill Demo Account
              </button>
            </div>

            {/* Switch to Sign Up */}
            <div className="text-center text-xs text-stone-500 pt-1">
              <span>Don't have an account? </span>
              <button
                type="button"
                onClick={() => { setMode('signup'); setError(''); }}
                className={`font-bold ${currentTheme.text} hover:underline cursor-pointer`}
              >
                Sign up
              </button>
            </div>

          </form>
        )}

        {/* ----------------- SIGN UP FORM ----------------- */}
        {mode === 'signup' && (
          <form onSubmit={handleSignUp} className="space-y-4 animate-fade-in">
            
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Nia Campbell"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 ${currentTheme.ring} text-sm outline-none transition-all`}
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 ${currentTheme.ring} text-sm outline-none transition-all`}
                />
              </div>
            </div>

            {/* Community Role Selector */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                I Am Joining As
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl border border-stone-300 ${currentTheme.ring} text-sm outline-none bg-white text-stone-800 transition-all cursor-pointer`}
              >
                <option value="scholar">Student / Brock U Scholar</option>
                <option value="community">Youth Community Member</option>
                <option value="clinician">Mental Health & Clinical Partner</option>
                <option value="donor">Supporter / Donor</option>
              </select>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Create Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className={`w-full pl-10 pr-11 py-2.5 rounded-xl border border-stone-300 ${currentTheme.ring} text-sm outline-none transition-all`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-700 cursor-pointer"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat password"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 ${currentTheme.ring} text-sm outline-none transition-all`}
                />
              </div>
            </div>

            {/* Terms Agreement Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-stone-600 select-none">
                <input
                  type="checkbox"
                  required
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="w-4 h-4 rounded text-stone-900 border-stone-300 focus:ring-0 mt-0.5 cursor-pointer"
                />
                <span>
                  I agree to Future Black Female's Community Guidelines and Canadian Privacy Policy.
                </span>
              </label>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3.5 rounded-full ${currentTheme.btn} text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-70 mt-2`}
            >
              {isLoading ? (
                <span>Creating account...</span>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Switch to Sign In */}
            <div className="text-center text-xs text-stone-500 pt-1">
              <span>Already have an account? </span>
              <button
                type="button"
                onClick={() => { setMode('signin'); setError(''); }}
                className={`font-bold ${currentTheme.text} hover:underline cursor-pointer`}
              >
                Sign in
              </button>
            </div>

          </form>
        )}

      </div>

      {/* CRA Charity Verification Line */}
      <div className="mt-8 text-center text-xs text-stone-400">
        Future Black Female Inc. &bull; Registered Canadian Charity CRA #{ORG_DATA.charityNumber}
      </div>

    </div>
  );
}
