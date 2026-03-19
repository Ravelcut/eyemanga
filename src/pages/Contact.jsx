import { FaInstagram } from 'react-icons/fa';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t, lang } = useLanguage();

  return (
    <div className="page-contact">
      <div className="contact-container center-content">
        <header className="contact-header">
          <h1 className="contact-title">{t('contact_us')}</h1>
          <div className="contact-title-line"></div>
          <p className="contact-subtitle">
            {lang === 'ka' 
              ? 'გაქვთ კითხვა, კოლაბორაციის იდეა, თუ უბრალოდ მოგესალმებათ?' 
              : 'Have a question, collab idea, or just want to say hi?'}
          </p>
          <a
            href="https://www.instagram.com/eye_manga_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-ig-link"
          >
            <FaInstagram /> @eye_manga_official
          </a>
        </header>
      </div>
      <Footer />
    </div>
  );
}
