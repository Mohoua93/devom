import React from 'react';
import '../styles/Project.css'; // pas besoin de changer ça si ton CSS est bien nommé

const projects = [
    {
      name: 'Kasa',
      image: '/assets/projects/Kasa.png',
      link: 'https://github.com/Mohoua93/kasa',
    },
    {
      name: 'Booki',
      image: '/assets/projects/Booki.png',
      link: 'https://github.com/Mohoua93/Booki',
    },
    {
      name: 'Panthère',
      image: '/assets/projects/logo.svg',
      link: 'https://github.com/Mohoua93/Panth-ere',
    },
    {
      name: 'Kanap',
      image: '/assets/projects/Kanap.png',
      link: 'https://github.com/Mohoua93/kanap',
    },
    {
      name: 'Piquante',
      image: '/assets/projects/piquante.jpg',
      link: 'https://github.com/Mohoua93/piquante',
    },
    {
      name: 'OhMyFood',
      image: '/assets/projects/OhMyFood.png',
      link: 'https://github.com/Mohoua93/Ohmyfood',
    },
    {
      name: 'DressHype',
      image: '/assets/projects/logo-dresshype.jpg',
      link: 'https://dresshypee.com/',
    },
  ];
  

function Projects() {
  return (
    <div className="projet-container">
      <h2 className='title-project'>Mes Projets</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.image} alt={`Logo ${project.name}`} />
            <h3>{project.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;