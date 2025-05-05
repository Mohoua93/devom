import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Devom
        </Link>
        <div className="flex items-center space-x-8">
          {/* Numéro de téléphone cliquable */}
          <a
            href="tel:0612345678"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            📞 06 12 34 56 78
          </a>
          {/* Liens de navigation */}
          <nav className="space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-700 font-medium hover:text-blue-600 transition ${
                  location.pathname === link.path ? 'text-blue-600' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}





