import React from 'react';

const Header = ({ name, surname }) => {
  return (
    <header className="header">
      <h1>{name} {surname}</h1>
      <p>My Dynamic Portfolio Website</p>
    </header>
  );
}

export default Header;
