import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For a link back to home, if needed
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For signup
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    if (!email || !password) {
      setError('Email and Password are required.');
      return;
    }
    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address.');
        return;
    }

    // Frontend only - no backend call
    console.log('Form submitted', { isLogin, email, password });
    alert(isLogin ? 'Login (frontend only) successful!' : 'Signup (frontend only) successful!');
    // Here you would typically call your backend API
    // For now, we just log and show an alert
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
            </div>
          )}
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="auth-button">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
        <div className="oauth-section">
          <p>Or</p>
          <button className="google-login-button">
            {/* Placeholder for Google Icon */}
            <span className="google-icon">G</span> 
            {isLogin ? 'Login with Google' : 'Sign up with Google'}
          </button>
        </div>
        <div className="toggle-auth">
          <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
          </button>
        </div>
        <div className="back-to-home">
            <Link to="/">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Auth; 