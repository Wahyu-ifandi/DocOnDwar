import React, { useState } from 'react';
import './Auth.css';

const Auth = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('patient');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phoneNumber: '',
    specialization: '',
    licenseNumber: '',
    dateOfBirth: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
      
      if (userType === 'doctor') {
        if (!formData.specialization) newErrors.specialization = 'Specialization is required';
        if (!formData.licenseNumber) newErrors.licenseNumber = 'License number is required';
      } else {
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          role: userType
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Something went wrong');
      }

      // Store token in localStorage
      localStorage.setItem('token', data.token);
      
      // Fetch user data
      const userResponse = await fetch('http://localhost:5000/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${data.token}`
        }
      });
      
      const userData = await userResponse.json();
      
      // Call onAuthSuccess with user data
      onAuthSuccess(userData);
    } catch (error) {
      setErrors({ submit: error.message });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        
        <div className="user-type-toggle">
          <button
            className={userType === 'patient' ? 'active' : ''}
            onClick={() => setUserType('patient')}
          >
            Patient
          </button>
          <button
            className={userType === 'doctor' ? 'active' : ''}
            onClick={() => setUserType('doctor')}
          >
            Doctor
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          {!isLogin && (
            <>
              <div className="form-group">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
              </div>

              {userType === 'doctor' ? (
                <>
                  <div className="form-group">
                    <input
                      type="text"
                      name="specialization"
                      placeholder="Specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                    />
                    {errors.specialization && <span className="error">{errors.specialization}</span>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="licenseNumber"
                      placeholder="License Number"
                      value={formData.licenseNumber}
                      onChange={handleChange}
                    />
                    {errors.licenseNumber && <span className="error">{errors.licenseNumber}</span>}
                  </div>
                </>
              ) : (
                <div className="form-group">
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                  {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
                </div>
              )}
            </>
          )}

          {errors.submit && <div className="error-message">{errors.submit}</div>}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="toggle-auth">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            className="toggle-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth; 