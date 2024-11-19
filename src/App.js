import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ProfileSetupAdmin from './components/ProfileSetupAdmin';
import ProfileSetupResident from './components/ProfileSetupResident';
import AdminDashboard from './components/AdminDashboard';
import ResidentDashboard from './components/ResidentDashboard';
import Homepage from './components/HomePage'
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/homepage" element={<Homepage/>} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile-setup/admin" element={<ProfileSetupAdmin />} />
        <Route path="/profile-setup/resident" element={<ProfileSetupResident />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/resident" element={<ResidentDashboard />} />
        <Route path="*" element={<Navigate to="/homepage" />} />
      </Routes>
    </Router>
  );
}

export default App;
