// Navbar.js
import React from 'react';
import './Navbar.css';
import { Button } from 'antd';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="/Images/uic-logo-small.ico" width="50" height="50" alt="Icon" />
        <h1>Student Offense Management System</h1>
      </div>
      <div className="button-container">
        <Link to="/login">
          <Button ghost>Go to Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
