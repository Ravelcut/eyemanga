import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCatalog from '../components/ProductCatalog';
import SearchBar from '../components/SearchBar';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';
import { products, categories } from '../data/products';
import './Catalog.css';

export default function Catalog() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.title_ka && p.title_ka.includes(q)) ||
        (p.description_ka && p.description_ka.includes(q))
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="page-catalog">
      <div className="catalog-container">
        <div className="catalog-header">
          <h1 className="catalog-title">{t('catalog')}</h1>
          <p className="catalog-count">{filtered.length} {t('items')}</p>
        </div>

        <div className="catalog-controls">
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'filter-btn-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {t(cat)}
              </button>
            ))}
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {filtered.length === 0 ? (
          <div className="catalog-empty">
            <p>{lang === 'ka' ? 'პროდუქტი ვერ მოიძებნა' : 'No products found'}</p>
            <button onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}>
              {lang === 'ka' ? 'ფილტრის გასუფთავება' : 'Clear Filters'}
            </button>
          </div>
        ) : (
          <div className="catalog-grid">
            <ProductCatalog products={filtered} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
