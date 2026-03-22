import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-logo">{'Saddouq Oussama '}</div>
              <p className="footer-text" style={{ marginTop: '8px' }}>
                © {new Date().getFullYear()} Oussama Saddouq. Tous droits réservés.
              </p>
            </div>
            <div className="footer-links">
              <a href="#home">Accueil</a>
              <a href="#about">À propos</a>
              <a href="#projects">Projets</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Footer;