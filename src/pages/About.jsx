import Footer from '../components/Footer';
import './About.css';

export default function About() {
  return (
    <div className="page-about">
      <div className="about-container">
        <header className="about-header">
          <h1 className="about-title">About</h1>
          <div className="about-title-line"></div>
        </header>

        <div className="about-grid">
          <article className="about-panel manga-panel">
            <div className="about-panel-inner">
              <h2>The Story</h2>
              <p>
                Eye Manga was born from a passion for storytelling and visual art.
                What started as a small independent project has grown into a full
                manga series with a dedicated community of readers and collectors.
              </p>
              <p>
                Each volume is crafted with meticulous attention to detail — from
                the line art to the panel composition — creating an immersive
                experience that pulls readers into a world of mystery, action, and
                discovery.
              </p>
            </div>
          </article>

          <article className="about-panel manga-panel">
            <div className="about-panel-inner">
              <h2>The Vision</h2>
              <p>
                We believe manga is more than just comics — it's a medium for
                exploring complex narratives, emotions, and ideas. Eye Manga pushes
                the boundaries of independent manga by blending Eastern and Western
                art styles.
              </p>
              <p>
                Our goal is to build a brand that extends beyond the page. Through
                exclusive merchandise, limited edition prints, and community events,
                we're creating a world that readers can carry with them.
              </p>
            </div>
          </article>

          <article className="about-panel manga-panel about-panel-wide">
            <div className="about-panel-inner">
              <h2>The Brand</h2>
              <p>
                The eye symbol represents perception — seeing beyond the surface.
                Every product we create carries this philosophy. From our manga
                volumes to our apparel line, each piece is designed with intention
                and crafted with quality in mind.
              </p>
            </div>
          </article>
        </div>

        <div className="about-stats">
          <div className="stat-item manga-panel">
            <span className="stat-number">6</span>
            <span className="stat-label">Volumes</span>
          </div>
          <div className="stat-item manga-panel">
            <span className="stat-number">12+</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="stat-item manga-panel">
            <span className="stat-number">∞</span>
            <span className="stat-label">Passion</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
