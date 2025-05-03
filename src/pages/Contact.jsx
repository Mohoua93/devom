import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css'; // ← Assure-toi d'importer le CSS

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Erreur lors de l'envoi.");
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert("Erreur serveur. Veuillez réessayer.");
    }
  };

  return (
    <div className="contact-container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="contact-title"
      >
        Contactez-moi
      </motion.h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Parlez-moi de votre projet..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Envoyer
        </motion.button>
      </form>
    </div>
  );
}

