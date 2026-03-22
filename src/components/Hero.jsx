import React from 'react';
import { FaDownload, FaEnvelope, FaReact, FaCode } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Disponible pour un stage
          </div>
          <p className="hero-greeting">Bonjour, je suis</p>
          <h1 className="hero-name">Oussama Saddouq</h1>
          <div className="hero-title-wrapper">
            <h2 className="hero-title">Développeur Web Junior</h2>
          </div>
          <p className="hero-description">
            Passionné par le développement web, je crée des applications modernes
            et performantes. Actuellement en formation en Développement Digital
            à l'OFPPT, je cherche à contribuer à des projets innovants.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              <FaEnvelope />
              Me Contacter
            </a>
            <a href="/CV s.pdf" download className="btn-secondary">
              <FaDownload />
              Télécharger CV
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Projets</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Ans de Formation</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="hero-image-blob">
              <img
                src="pic.png"
                alt="Oussama Saddouq"
              />
            </div>

            <div className="hero-floating-card card-1">
              <div className="floating-icon react-icon">
                <FaReact />
              </div>
              <div className="floating-text">
                <h4>React.js</h4>
                <p>Full Stack Dev</p>
              </div>
            </div>

            {/* <div className="hero-floating-card card-2">
              <div className="floating-icon code-icon">
                <FaCode />
              </div>
              <div className="floating-text">
                <h4>Clean Code</h4>
                <p>Best Practices</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;