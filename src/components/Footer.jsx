import React from 'react';
import '../styles/Footer.css'; // Pour le style

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Devom — Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
