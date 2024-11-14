import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

function ProfileSetupResident() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    societyName: '',
    flatNo: '',
    postalCode: '',
  });
  const navigate = useNavigate();

  // Retrieve user ID from local storage
  const userId = localStorage.getItem('userId');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(`auth/profile/complete/resident`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      navigate('/dashboard/resident');
    } catch (error) {
      console.error('Profile setup failed:', error.response?.data);
    }
  };

  return (
    <form onSubmit={handleProfileSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleInputChange} required />
      <input type="text" name="phone" placeholder="Phone Number" onChange={handleInputChange} required />
      <input type="text" name="societyName" placeholder="Society Name" onChange={handleInputChange} required />
      <input type="text" name="flatNo" placeholder="Flat Number" onChange={handleInputChange} required />
      <input type="text" name="postalCode" placeholder="Postal Code" onChange={handleInputChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProfileSetupResident;
