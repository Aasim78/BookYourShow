import React from 'react';
import { Button } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="header">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="header-title">BookYourShow</h1>
        <div className="header-right d-flex align-items-center">
          <input type="text" className="header-search me-2" placeholder="Search..." />
          <Button className="header-button">Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
