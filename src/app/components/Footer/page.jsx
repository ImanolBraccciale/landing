// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Logo</h2>
        <p>Dirección de la empresa</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="footer-section">
        <h2>Redes Sociales</h2>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
      <div className="footer-section">
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
