import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <svg viewBox="0 0 100 50" width="40" height="20" aria-label="Eye Manga Logo">
            <path d="M10,25 Q50,-5 90,25 Q50,55 10,25" fill="none" stroke="currentColor" strokeWidth="6" />
            <circle cx="50" cy="25" r="10" fill="currentColor" />
            <circle cx="50" cy="25" r="4" fill="var(--bg-color)" />
          </svg>
          <span className="footer-brand-name">Eye Manga</span>
        </div>

        <nav className="footer-nav">
          <Link to="/">{t('home')}</Link>
          <Link to="/catalog">{t('catalog')}</Link>
          <Link to="/about">{t('about')}</Link>
          <Link to="/contact">{t('contact')}</Link>
        </nav>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/eye_manga_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaInstagram /> @eye_manga_official
          </a>
        </div>

        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Eye Manga. {t('all_rights_reserved') || 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
}
