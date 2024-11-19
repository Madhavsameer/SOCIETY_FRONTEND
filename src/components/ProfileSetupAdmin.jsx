import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import '../styles/forms.css';
import img from '../styles/building.jpeg';
import logo from '../styles/logo.png';

function ProfileSetupAdmin() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    societyName: '',
    societyAddress: '',
    city: '',
    district: '',
    postalCode: '',
  });
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/auth/profile/complete/admin/${userId}`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      navigate('/dashboard/admin');
    } catch (error) {
      console.error('Profile setup failed:', error.response?.data);
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

        <form onSubmit={handleProfileSubmit} className="login-form">
          <h1>Admin Profile Setup</h1>
          <p>Fill these details to continue</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="societyName"
            placeholder="Society Name"
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="societyAddress"
            placeholder="Society Address"
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="district"
            placeholder="District"
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileSetupAdmin;
