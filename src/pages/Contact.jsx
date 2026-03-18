import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiSend, FiMail } from 'react-icons/fi';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t, lang } = useLanguage();
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
          <h1 className="contact-title">{t('contact_us')}</h1>
          <div className="contact-title-line"></div>
          <p className="contact-subtitle">
            {lang === 'ka' 
              ? 'გაქვთ კითხვა, კოლაბორაციის იდეა, თუ უბრალოდ მოგესალმებათ? მოგვწერეთ.' 
              : 'Have a question, collab idea, or just want to say hi? Reach out.'}
          </p>
        </header>

        <div className="contact-grid">
          <form className="contact-form manga-panel" onSubmit={handleSubmit}>
            <div className="form-inner">
              <div className="form-group">
                <label htmlFor="name">{lang === 'ka' ? 'სახელი' : 'Name'}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder={lang === 'ka' ? 'თქვენი სახელი' : 'Your name'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{lang === 'ka' ? 'ელ-ფოსტა' : 'Email'}</label>
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
                <label htmlFor="message">{lang === 'ka' ? 'შეტყობინება' : 'Message'}</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder={lang === 'ka' ? 'რაზე ფიქრობთ?' : "What's on your mind?"}
                  rows="5"
                />
              </div>
              <button type="submit" className="submit-btn">
                <FiSend /> {t('send_message')}
              </button>
              {submitted && (
                <p className="form-success">
                  {lang === 'ka' 
                    ? 'შეტყობინება გაიგზავნა! მალე დაგიკავშირდებით.' 
                    : "Message sent! We'll get back to you soon."}
                </p>
              )}
            </div>
          </form>

          <div className="contact-sidebar">
            <div className="contact-card manga-panel">
              <div className="contact-card-inner">
                <h3><FiMail /> {lang === 'ka' ? 'პირდაპირი შეტყობინება' : 'Direct Message'}</h3>
                <p>
                  {lang === 'ka' 
                    ? 'გირჩევნიათ პირდაპირი შეტყობინება? მოგვწერეთ ინსტაგრამზე სწრაფი პასუხისთვის.' 
                    : 'Prefer DMs? Reach out on Instagram for the fastest response.'}
                </p>
                <a
                  href="https://ig.me/m/eye_manga_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dm-btn"
                >
                  <FaInstagram /> {lang === 'ka' ? 'მოგვწერეთ ინსტაგრამზე' : 'DM on Instagram'}
                </a>
              </div>
            </div>

            <div className="contact-card manga-panel">
              <div className="contact-card-inner">
                <h3><FaInstagram /> {lang === 'ka' ? 'მოგვყევით' : 'Follow Us'}</h3>
                <p>
                  {lang === 'ka'
                    ? 'იყავი განახლებული უახლესი გამოშვებების, სიახლეებისა და კადრს მიღმა მასალების შესახებ.'
                    : 'Stay updated with the latest releases, drops, and behind-the-scenes content.'}
                </p>
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
