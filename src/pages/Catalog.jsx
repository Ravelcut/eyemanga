import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCatalog from '../components/ProductCatalog';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import { products, categories } from '../data/products';
import './Catalog.css';

export default function Catalog() {
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
        p.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="page-catalog">
      <div className="catalog-container">
        <div className="catalog-header">
          <h1 className="catalog-title">Catalog</h1>
          <p className="catalog-count">{filtered.length} item{filtered.length !== 1 ? 's' : ''}</p>
        </div>

        <div className="catalog-controls">
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'filter-btn-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {filtered.length === 0 ? (
          <div className="catalog-empty">
            <p>No products found</p>
            <button onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}>
              Clear Filters
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
