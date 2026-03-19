import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

export default function About() {
  const { lang, t } = useLanguage();
  return (
    <div className="page-about">
      <div className="about-container">
        <header className="about-header">
          <h1 className="about-title">{t('about')}</h1>
          <div className="about-title-line"></div>
        </header>

        <div className="about-grid">
          <article className="about-panel manga-panel">
            <div className="about-panel-inner">
              <h2>{t('the_story')}</h2>
              <p>{t('story_text')}</p>
            </div>
          </article>

          <article className="about-panel manga-panel">
            <div className="about-panel-inner">
              <h2>{t('the_vision')}</h2>
              <p>{t('vision_text')}</p>
            </div>
          </article>

          <article className="about-panel manga-panel about-panel-wide">
            <div className="about-panel-inner">
              <h2>{t('the_brand')}</h2>
              <p>{t('brand_text')}</p>
            </div>
          </article>
        </div>

        <section className="how-to-order-section">
          <div className="section-header">
            <h2 className="section-title">{t('how_to_order')}</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="how-to-grid">
            <div className="how-to-step manga-panel">
              <h3>{t('step_1')}</h3>
              <p>{t('step_1_text')}</p>
            </div>
            <div className="how-to-step manga-panel">
              <h3>{t('step_2')}</h3>
              <p>{t('step_2_text')}</p>
            </div>
            <div className="how-to-step manga-panel">
              <h3>{t('step_3')}</h3>
              <p>{t('step_3_text')}</p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
