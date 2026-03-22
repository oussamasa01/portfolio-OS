import React from 'react';
import { FaMapMarkerAlt, FaGraduationCap, FaLanguage, FaHeart } from 'react-icons/fa';

const About = () => {
  const details = [
    {
      icon: <FaMapMarkerAlt />,
      label: 'Localisation',
      value: 'Oujda, Maroc',
    },
    {
      icon: <FaGraduationCap />,
      label: 'Formation',
      value: 'Dev Digital - OFPPT',
    },
    {
      icon: <FaLanguage />,
      label: 'Langues',
      value: 'Arabe, Français, Anglais',
    },
    {
      icon: <FaHeart />,
      label: 'Passion',
      value: 'Web & Nouvelles Tech',
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-image">
          <div className="about-image-card">
            <img
              src="pic.png"
              alt="Oussama Saddouq"
            />
            <div className="about-image-info">
              <h3>Oussama Saddouq</h3>
              <p>Développeur Web Junior</p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            À Propos de Moi
          </h2>
          <h3>Un développeur passionné par la création d'expériences web</h3>
          <p>
            Développeur web junior motivé, capable de concevoir et développer des
            applications web. Actuellement en deuxième année en Développement Digital
            à l'OFPPT, je souhaite participer à des projets concrets, améliorer
            l'expérience utilisateur et renforcer mes compétences techniques au sein
            d'une équipe dynamique.
          </p>
          <p>
            Je suis également volontaire à la Maison des Sciences, ce qui reflète
            mon engagement envers le partage des connaissances et l'apprentissage continu.
          </p>

          <div className="about-details">
            {details.map((detail, index) => (
              <div className="about-detail-item" key={index}>
                <div className="about-detail-icon">{detail.icon}</div>
                <div className="about-detail-text">
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary">
            Travaillons Ensemble
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;