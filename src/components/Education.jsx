import React from 'react';
import { FaCalendarAlt, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      period: 'Sep 2024 - Présent',
      title: 'Diplôme de Technicien Spécialisé en Développement Digital',
      subtitle: '2ème année',
      institution: 'CFMTNE, Oujda',
    },
    {
      id: 2,
      period: 'Oct 2022 - Juin 2023',
      title: 'Baccalauréat - Sciences Physiques',
      subtitle: '',
      institution: 'Lycée LAMHARCHI, Oujda',
    },
  ];

  return (
    <section className="education section" id="education">
      <div className="container">
        <h2 className="section-title">Ma Formation</h2>
        <p className="section-subtitle">
          Mon parcours académique et les formations qui ont façonné mes compétences
        </p>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div
              className="timeline-item"
              key={edu.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">
                  <FaCalendarAlt />
                  {edu.period}
                </div>
                <h3>{edu.title}</h3>
                {edu.subtitle && (
                  <p style={{ color: 'var(--primary-light)', fontWeight: 600, marginBottom: '8px' }}>
                    {edu.subtitle}
                  </p>
                )}
                <p className="institution">
                  <FaUniversity />
                  {edu.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;