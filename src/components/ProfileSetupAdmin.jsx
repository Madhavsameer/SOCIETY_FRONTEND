import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

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

  // Retrieve user ID (if stored in localStorage, for example)
  const userId = localStorage.getItem('userId');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/api/profile/complete/admin/${userId}`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      navigate('/dashboard/admin');
    } catch (error) {
      console.error('Profile setup failed:', error.response?.data);
    }
  };

  return (
    <form onSubmit={handleProfileSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleInputChange} required />
      <input type="text" name="phone" placeholder="Phone Number" onChange={handleInputChange} required />
      <input type="text" name="societyName" placeholder="Society Name" onChange={handleInputChange} required />
      <input type="text" name="societyAddress" placeholder="Society Address" onChange={handleInputChange} required />
      <input type="text" name="city" placeholder="City" onChange={handleInputChange} required />
      <input type="text" name="district" placeholder="District" onChange={handleInputChange} required />
      <input type="text" name="postalCode" placeholder="Postal Code" onChange={handleInputChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProfileSetupAdmin;
