import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiSend, FiMail } from 'react-icons/fi';
import Footer from '../components/Footer';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-contact">
      <div className="contact-container">
        <header className="contact-header">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-title-line"></div>
          <p className="contact-subtitle">Have a question, collab idea, or just want to say hi? Reach out.</p>
        </header>

        <div className="contact-grid">
          <form className="contact-form manga-panel" onSubmit={handleSubmit}>
            <div className="form-inner">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="What's on your mind?"
                  rows="5"
                />
              </div>
              <button type="submit" className="submit-btn">
                <FiSend /> Send Message
              </button>
              {submitted && (
                <p className="form-success">Message sent! We'll get back to you soon.</p>
              )}
            </div>
          </form>

          <div className="contact-sidebar">
            <div className="contact-card manga-panel">
              <div className="contact-card-inner">
                <h3><FiMail /> Direct Message</h3>
                <p>Prefer DMs? Reach out on Instagram for the fastest response.</p>
                <a
                  href="https://ig.me/m/eye_manga_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dm-btn"
                >
                  <FaInstagram /> DM on Instagram
                </a>
              </div>
            </div>

            <div className="contact-card manga-panel">
              <div className="contact-card-inner">
                <h3><FaInstagram /> Follow Us</h3>
                <p>Stay updated with the latest releases, drops, and behind-the-scenes content.</p>
                <a
                  href="https://www.instagram.com/eye_manga_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-link"
                >
                  @eye_manga_official
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
