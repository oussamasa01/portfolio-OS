import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaUsers, FaGlobe } from 'react-icons/fa';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: 'HTML / CSS', level: 85 },
    { name: 'JavaScript', level: 70 },
    { name: 'React.js', level: 65 },
    { name: 'Laravel', level: 50 },
    { name: 'MySQL', level: 60 },
    { name: 'Git / GitHub', level: 70 },
  ];

  const softSkills = [
    'Organisation',
    'Travail en équipe',
    'Communication',
    'Adaptabilité',
    'Apprentissage rapide',
    'Gestion de projet',
  ];

  const languages = [
    { name: 'Arabe', level: 'Langue maternelle' },
    { name: 'Français', level: 'Intermédiaire' },
    { name: 'Anglais', level: 'Basique' },
  ];

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Mes Compétences</h2>
        <p className="section-subtitle">
          Les technologies et compétences que j'utilise pour donner vie à vos projets
        </p>

        <div className="skills-grid">
          {/* Technical Skills */}
          <div className="skill-category">
            <div className="skill-category-header">
              <div className="skill-category-icon tech">
                <FaCode />
              </div>
              <h3>Compétences Techniques</h3>
            </div>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.15}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skill-category">
            <div className="skill-category-header">
              <div className="skill-category-icon soft">
                <FaUsers />
              </div>
              <h3>Compétences Personnelles</h3>
            </div>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <span
                  className="soft-skill-tag"
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div style={{ marginTop: '32px' }}>
              <div className="skill-category-header">
                <div className="skill-category-icon lang">
                  <FaGlobe />
                </div>
                <h3>Langues</h3>
              </div>
              <div>
                {languages.map((lang, index) => (
                  <div className="lang-item" key={index}>
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;