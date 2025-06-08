import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Button, Input, Space } from 'antd';
import BottomBar from '../components/Bottombar';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="centered-content">
      <div className="login-panel">
        <img src="/Images/uic-logo-small.ico" width="150" height="150" alt="Icon" />
        <Space direction="vertical" size={12} style={{ width: '100%' }}>
          <div className="input-group">
            <label>User ID:</label>
            <Input type="text" />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <Input type="password" />
          </div>
          <div className="input-group">
            <Button onClick={handleLogin} className="login-button" style={{ backgroundColor: '#c72576', color: '#ffffff' }}>
              Login
            </Button>
          </div>
        </Space>
      </div>
      <BottomBar />
    </div>
  );
};

export default Login;
