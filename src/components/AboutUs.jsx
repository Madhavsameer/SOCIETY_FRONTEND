// AboutUs.js
import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to our platform! We are dedicated to providing the best service and experience for our users.
        Our team consists of passionate individuals committed to delivering quality and innovation in everything we do.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to create a user-friendly platform that simplifies tasks and enhances productivity for individuals and businesses alike.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Customer-centric</li>
        <li>Innovation-driven</li>
        <li>Integrity</li>
        <li>Quality</li>
      </ul>
      <h2>Our Team</h2>
      <p>
        We have a diverse and talented team of developers, designers, and project managers who work together to bring you the best experience.
      </p>
    </div>
  );
};

export default AboutUs;
