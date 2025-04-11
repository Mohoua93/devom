import React from 'react';
import '../styles/Home.css'; // à créer dans /styles si tu préfères

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Bonjour, je suis <span className="highlight">Mohamed Oualid</span></h1>
        <h2>Développeur Web Front-End</h2>
        <p>
          Passionné par la création d'expériences numériques fluides et modernes.
          Bienvenue sur mon portfolio !
        </p>
        <a href="#projects" className="btn">Voir mes projets</a>
      </div>
    </div>
  );
}

export default Home;

