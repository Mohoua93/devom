import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1>À propos de moi</h1>
        <p>
          Bonjour ! Je m'appelle <strong>Mohamed</strong>, développeur web freelance passionné.
          Fraîchement diplômé, je me lance dans l'aventure avec enthousiasme et l'envie de construire des projets concrets et utiles.
        </p>
        <p>
          Je maîtrise les bases solides du développement web moderne : <strong>Développeur full-stack (HTML, CSS, JavaScript/React, Node.js)</strong> je suis capable de gérer le frontend et le backend.
          Je suis à l’écoute, curieux, et toujours prêt à apprendre pour proposer des solutions efficaces et sur mesure.
        </p>
        <p>
          Si tu as un projet, une idée, ou simplement besoin d’un coup de main technique, je serais ravi d’en discuter avec toi.
          Mon objectif ? Faire grandir chaque projet comme si c’était le mien.
        </p>
        <p className="signature">— Devom</p>
      </div>
    </section>
  );
};

export default About;
