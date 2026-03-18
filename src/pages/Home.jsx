import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { getFeaturedProducts } from '../data/products';
import './Home.css';

export default function Home() {
  const { lang, t } = useLanguage();
  const featured = getFeaturedProducts();

  return (
    <div className="page-home">
      <Hero />

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
