import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import '../styles/forms.css';
import img from '../styles/building.jpeg';
import logo from '../styles/logo.png';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({ username: '', password: '', role: 'resident' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const resp = await api.post('/auth/register', formData);
      console.log(resp);
      navigate('/login');
    } catch (error) {
      console.log(error);
      console.error('Registration failed:', error.response?.data);
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

        <form onSubmit={handleRegister} className="login-form">
          <h1>Sign Up</h1>
          
          <input
            type="text"
            name="username"
            placeholder="Email"
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <select
            name="role"
            onChange={handleInputChange}
            className="input-field"
            required
          >
            <option value="Not selected">Select Role</option>
            <option value="ADMIN">Admin</option>
            <option value="RESIDENT">Resident</option>
          </select>
          <button type="submit" className="submit-button">Sign Up</button>
        </form>

        <br />
        <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
}

export default Register;
