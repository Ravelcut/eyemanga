import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
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
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
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
          <p>&copy; {new Date().getFullYear()} Eye Manga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
