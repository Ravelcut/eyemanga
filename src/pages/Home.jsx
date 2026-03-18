import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import InstagramPanel from '../components/InstagramPanel';
import Footer from '../components/Footer';
import { getFeaturedProducts } from '../data/products';
import './Home.css';

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div className="page-home">
      <Hero />

      <section className="section featured-section">
        <div className="section-header">
          <h2 className="section-title">Featured</h2>
          <div className="section-line"></div>
        </div>
        <div className="featured-grid">
          <ProductCatalog products={featured} />
        </div>
      </section>

      <section className="section ig-section">
        <div className="section-header">
          <h2 className="section-title">Follow Us</h2>
          <div className="section-line"></div>
        </div>
        <InstagramPanel />
      </section>

      <Footer />
    </div>
  );
}
