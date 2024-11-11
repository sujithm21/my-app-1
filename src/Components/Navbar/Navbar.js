// src/components/Shared/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>My Courses App</h2>
      </div>
      <ul className="navbar-links">
        {isLoggedIn ? (
          <>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#profile">Profile</a></li>
            <button className="navbar-logout" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <li><a href="#login">Login</a></li>
            <li><a href="#signup">Signup</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
