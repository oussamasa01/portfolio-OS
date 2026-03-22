import React from 'react';
import { FaCloudSun, FaCity, FaPlane, FaGithub, FaCheckCircle } from 'react-icons/fa';

// Import your images
import weatherApp from '../assets/images/weather-app.png';
import promoteOujda from '../assets/images/promote-oujda.png';
import bladiTrip from '../assets/images/bladi-trip.png';
import adhanApp from '../assets/images/adhan-ap.png';

const Projects = () => {
  const projects = [
   
    {
      id: 1,
      title: 'Promote Oujda',
      description:
        'Site web pour promouvoir la ville d\'Oujda, avec des informations touristiques, culturelles et événementielles.',
      icon: <FaCity />,
      image: promoteOujda,
      tech: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Interface responsive',
        'Design moderne et clair',
        'Contenu touristique structuré',
        'Expérience utilisateur optimisée',
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      github: 'https://github.com/oussamasa01/Promot-OUJDA',
    },
     {
      id: 2,
      title: 'Weather App',
      description:
        'Application météo permettant la recherche par ville avec des données en temps réel via une API externe.',
      icon: <FaCloudSun />,
      image: weatherApp,
      tech: ['React', 'API REST', 'React Hooks', 'CSS'],
      features: [
        'Recherche par ville',
        'Données en temps réel',
        'Gestion des états avec Hooks',
        'Affichage dynamique',
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      github: 'https://github.com/oussamasa01/Weather-APP',
    },
    {
      id: 3,
      title: 'Bladi Trip',
      description:
        'Site touristique du Maroc présentant les destinations touristiques : montagnes, mer, désert.',
      icon: <FaPlane />,
      image: bladiTrip,
      tech: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Navigation intuitive',
        'Valorisation des régions',
        'Contenu structuré',
        'Interface utilisateur soignée',
      ],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      github: 'https://github.com/oussamasa01/bladi-trip',
    },
    {
      id: 4,
      title: 'Adhan Timing App',
      description:
        "Application React + Vite affichant les horaires des prières islamiques avec compte à rebours en direct, sélection de villes, favoris et lecture de l'Adhan. ",
      icon: <FaPlane />,
      image: adhanApp,
      tech: ['React', 'CSS', 'JavaScript (ES6+)', 'Prayer Times API', 'Vite'],
      features: [
        'Compte à rebours en temps réel',
        'Sélection et gestion des villes favorites',
        'Affichage de la date Hijri',
        'Interface moderne et responsive',
      ],
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      github: 'https://github.com/oussamasa01/Adaan-Reminder',
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        <p className="section-subtitle">
          Découvrez quelques-uns de mes projets récents en développement web
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div
                className="project-image"
                style={{ background: project.gradient }}
              >
                {/* ✅ Added: show image if exists, otherwise show icon */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                ) : (
                  <div className="project-image-icon">{project.icon}</div>
                )}

                <span className="project-number">
                  #{String(project.id).padStart(2, '0')}
                </span>
                <div className="project-image-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    Voir sur GitHub
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech-stack">
                  {project.tech.map((tech, index) => (
                    <span className="tech-tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="project-features">
                  {project.features.map((feature, index) => (
                    <li key={index}>
                      <FaCheckCircle className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;