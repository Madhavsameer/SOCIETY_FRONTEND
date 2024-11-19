// src/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import logo from '../styles/logo.png'

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="site-title">CommUnity</h1>
        </div>
        <nav className="nav-links">
          <Link to="/homepage" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>
      </header>

      {/* Main Section */}
      <main className="main-section">
        <div className="welcome-box">
          <h2 className="welcome-title">Welcome to CommUnity</h2>
          <p className="welcome-description">
            The ultimate platform designed to streamline housing society management and foster community connections. Whether you're a resident, administrator, or non-resident, CommUnity brings convenience to your fingertips with a comprehensive set of features tailored for everyone.
          </p>
          <Link to="/login">
            <button className="get-started-button">Get Started</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
