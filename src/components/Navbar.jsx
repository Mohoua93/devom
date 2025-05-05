import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/a-propos", label: "À propos" },
    { path: "/contact", label: "Contact" },
  ];

  // Appliquer body-compact + fermer au clic extérieur
  useEffect(() => {
    document.body.classList.toggle("body-compact", menuOpen);

    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-layout">
        {/* Menu burger à gauche */}
        <button
          className="burger-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          ☰
        </button>

        {/* Logo centré */}
        <div className="navbar-logo-center">
          <Link to="/" className="logo-link">
            Devom
          </Link>
        </div>

        {/* Numéro de téléphone à droite */}
        <a href="tel:0781628093" className="navbar-phone-right">
          📞 07 81 62 80 93
        </a>
      </div>

      {/* Menu tiroir */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`navbar-link ${
                location.pathname === link.path ? "nav-link-active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}











