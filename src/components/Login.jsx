import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import axios from 'axios';

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
      const { token, role, firstLogin } = response.data;
      console.log(role, token);
      localStorage.setItem('token', token);

      if (firstLogin) {
        // Redirect to profile setup
        navigate(role === 'ADMIN' ? '/profile-setup/admin' : '/profile-setup/resident');
      } else {
        // Redirect to appropriate dashboard
        navigate(role === 'ADMIN' ? '/dashboard/admin' : '/dashboard/resident');
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
