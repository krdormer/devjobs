import React from 'react';
import './Header.styles.css';

const Header = () => {
  return (
    <header className="dj-header">
      <h1 className="dj-logo">devjobs</h1>
      <div className="dark-light-switch"></div>
    </header>
  );
};

export default Header;
