import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Bonjour, je suis <span className="highlight">Mohamed Oualid</span></h1>
        <h2>Développeur Web Front-End</h2>
        <p>
          Passionné par la création d'expériences numériques fluides et modernes.
          Bienvenue dans mon portfolio !
        </p>
        <Link to="/projects" className="btn">Voir mes projets</Link>
      </div>
    </div>
  );
}

export default Home;

