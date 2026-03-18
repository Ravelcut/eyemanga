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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </article>

          <article className="about-panel manga-panel">
            <div className="about-panel-inner">
              <h2>{t('the_vision')}</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </article>

          <article className="about-panel manga-panel about-panel-wide">
            <div className="about-panel-inner">
              <h2>{t('the_brand')}</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
            </div>
          </article>
        </div>

      </div>
      <Footer />
    </div>
  );
}
