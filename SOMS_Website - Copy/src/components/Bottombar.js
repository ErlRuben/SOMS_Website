// BottomBar.js
import React from 'react';
import './Bottombar.css';

const Bottombar = () => {
  return (
    <div className="bottombar">
        <div className="left">
            <img src="/Images/uic-logo-small.ico" width="50" height="50" alt="Icon" />
            <span className="spacer"></span>
            <span style={{ textAlign: 'left' }}>UNIVERSITY OF IMMACULATE CONCEPTION<br/>Main Campus: Father Selga St., Davao City</span>

        </div>
        <div className="right">
            <span style={{ textAlign: 'right' }}>
                CONTACT SUPPORT: <br />Sample@uic.edu.ph
            </span>
        </div>

    </div>
  );
};

export default Bottombar;
