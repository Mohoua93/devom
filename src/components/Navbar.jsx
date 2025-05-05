import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/a-propos", label: "À propos" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          Devom
        </Link>
      </div>

      <div className="navbar-content">
        {/* Numéro de téléphone cliquable */}
        <a href="tel:0612345678" className="navbar-phone">
          📞 07 81 62 80 93
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar-link ${
                  location.pathname === link.path ? "nav-link-active" : ""
                }`}
                aria-current={
                  location.pathname === link.path ? "page" : undefined
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

