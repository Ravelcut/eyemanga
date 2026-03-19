import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { getFeaturedProducts, getRecentlyVisitedProducts } from '../data/products';
import './Home.css';

export default function Home() {
  const { lang, t } = useLanguage();
  const [featured] = useState(() => getFeaturedProducts());
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    // Load recently visited products on client mount
    setRecent(getRecentlyVisitedProducts());
  }, []);

  return (
    <div className="page-home">
      <Hero />

      {recent.length > 0 && (
        <section className="section recent-section">
          <div className="section-header">
            <h2 className="section-title">{lang === 'ka' ? 'ბოლოს ნანახი' : 'Recently Visited'}</h2>
            <div className="section-line"></div>
          </div>
          <div className="recent-grid">
            <ProductCatalog products={recent} />
          </div>
        </section>
      )}

      <section className="section featured-section">
        <div className="section-header">
          <h2 className="section-title">{t('featured')}</h2>
          <div className="section-line"></div>
        </div>
        <div className="featured-grid">
          <ProductCatalog products={featured} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
