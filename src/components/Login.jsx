import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import '../styles/forms.css';
import img from '../styles/building.jpeg';
import logo from '../styles/logo.png';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', formData);
      console.log(response.data);
      const { token, role, firstLogin } = response.data;
      console.log(role, token);
      localStorage.setItem('token', token);
      localStorage.setItem('userId', response.data.id);

      if (firstLogin) {
        navigate(role === 'ADMIN' ? '/profile-setup/admin' : '/profile-setup/resident');
      } else {
        navigate(role === 'ADMIN' ? '/dashboard/admin' : '/dashboard/resident');
      }
    } catch (error) {
      console.log(error);
      console.error('Login failed:', error.response ? error.response.data : error.message);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={img} alt="Building" className="background-image" />
      </div>

      <div className="form-container">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo-image" />
          <h3 className="logo-title">CommUnity</h3>
          <p className="logo-subtitle">Seamless Community Interaction and Management</p>
          
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <h1>Login</h1>
          <h2>Welcome Back</h2>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <button type="submit" className="submit-button">Login</button>
        </form>
        <br />

        <Link to="/register">Don't have an account? Register</Link>
      </div>
    </div>
  );
}

export default Login;
