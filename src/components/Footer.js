import React from 'react';

const Footer = ({ fullName }) => {
  return (
    <footer className="footer">
      <p>Copyright © {fullName}</p>
    </footer>
  );
}

export default Footer;
