import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { lang, t } = useLanguage();
  return (
    <section className="hero">
      <div className="hero-bg-effects">
        <div className="speed-line speed-line-1"></div>
        <div className="speed-line speed-line-2"></div>
        <div className="speed-line speed-line-3"></div>
        <div className="speed-line speed-line-4"></div>
        <div className="speed-line speed-line-5"></div>
        <div className="halftone-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-eyeball">
          <svg viewBox="0 0 200 100" className="hero-eye-svg" aria-hidden="true">
            <path d="M10,50 Q100,-20 190,50 Q100,120 10,50" fill="none" stroke="currentColor" strokeWidth="6" />
            <circle cx="100" cy="50" r="22" fill="currentColor" />
            <circle cx="100" cy="50" r="9" fill="var(--bg-color)" />
            <path d="M95,30 L105,30 L105,42 L95,42 Z" fill="var(--bg-color)" />
          </svg>
        </div>
        <h1 className="hero-title">
          <span className="hero-title-line">Eye</span>
          <span className="hero-title-line hero-title-accent">Manga</span>
        </h1>
        <p className="hero-subtitle">
          {lang === 'ka' 
            ? 'შეიძინე მანგა, ანიმეს სტიკერები/პოსტერები იაფად' 
            : 'buy manga, anime stickers/posters for cheap'}
        </p>
        <div className="hero-actions">
          <Link to="/catalog" className="hero-btn hero-btn-primary">{t('catalog')}</Link>
          <Link to="/about" className="hero-btn hero-btn-secondary">{t('the_story')}</Link>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>{lang === 'ka' ? 'ჩამოსქროლე' : 'Scroll'}</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
