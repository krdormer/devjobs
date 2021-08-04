import React from 'react';
import './Header.styles.css';

const Header = () => {
  return (
    <header className="dj-header">
      <span className="dj-logo">devjobs</span>
      <div className="dark-light-switch"></div>
    </header>
  );
};

export default Header;
