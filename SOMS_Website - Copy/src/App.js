// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Button, Flex } from 'antd';
import BottomBar from './components/Bottombar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard.tsx';

function Home() {
  return (

    <div className="centered-content">
      <div className="centered-text">
      <div className='panel-welcome'>
      <img src="/Images/uic-logo-small.ico" width="150" height="150" alt="Icon" /> 
        <div><br/></div>
          <h1>Welcome to Student Offense Management System</h1>
          <div><br/></div>
          <Link to="/login">
            <Button className="login-button" style={{ backgroundColor: '#c72576', color: '#ffffff' }}>
              Login
            </Button>
          </Link>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Router>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
