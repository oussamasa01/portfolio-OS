import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate EmailJS or a backend
    console.log('Form data:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactItems = [
    {
      icon: <FaPhone />,
      label: 'Téléphone',
      value: '+212 646 630520',
      href: 'tel:+212646630520',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'saddouqoussama@gmail.com',
      href: 'mailto:saddouqoussama@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Adresse',
      value: 'Hay Ngadi Rue 04, Nr 12, Oujda',
      href: null,
    },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Me Contacter</h2>
        <p className="section-subtitle">
          N'hésitez pas à me contacter pour discuter de vos projets ou opportunités
        </p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-info-header">
              <h3>Parlons de votre projet</h3>
              <p>
                Je suis toujours ouvert aux nouvelles opportunités et aux projets
                intéressants. Contactez-moi et discutons ensemble !
              </p>
            </div>

            <div className="contact-items">
              {contactItems.map((item, index) => (
                <a
                  href={item.href || '#'}
                  key={index}
                  className="contact-item"
                  style={{ cursor: item.href ? 'pointer' : 'default' }}
                >
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-text">
                    <h4>{item.label}</h4>
                    <p>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-social">
              <a
                href="https://linkedin.com/in/saddouq-OUSSAMA"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/oussamasa01"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Le sujet de votre message"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit">
              {submitted ? (
                '✓ Message Envoyé !'
              ) : (
                <>
                  <FaPaperPlane />
                  Envoyer le Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;