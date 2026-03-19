import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import './ProductCatalog.css';

export default function ProductCatalog({ products = [] }) {
  const { addToCart } = useCart();
  const { lang, t } = useLanguage();

  return (
    <>
      {products.map((product) => (
        <article
          key={product.id}
          className="manga-panel product-card"
          style={{
            gridColumn: `span ${product.spanCol}`,
            gridRow: `span ${product.spanRow}`,
          }}
        >
          <Link to={`/product/${product.id}`} className="product-link">
            <img src={product.image} alt={product.title} className="product-image" />
          </Link>
          <div className="product-info-overlay">
            <div className="info-content">
              <span className="product-category">{t(product.category)}</span>
              <h3>{lang === 'ka' ? product.title_ka : product.title}</h3>
              {(product.author || product.author_ka) && (
                <p className="product-author">
                  {lang === 'ka' ? (product.author_ka || product.author) : product.author}
                </p>
              )}
              <p className="price">{t('cur_sym')}{(product.volumes?.[0]?.price || 0).toFixed(2)}</p>

              {product.volumes && product.volumes.length > 1 ? (
                /* Has variety – show a single More button */
                <Link
                  to={`/product/${product.id}`}
                  className="buy-now-link more-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t('more')} →
                </Link>
              ) : (
                /* No variety – show Add to Cart directly */
                <button
                  className="buy-button"
                  onClick={(e) => {
                    e.preventDefault();
                    const firstVol = product.volumes?.[0];
                    addToCart({
                      id: `${product.id}-v1`,
                      seriesId: product.id,
                      selectedVolume: 1,
                      price: firstVol?.price || 0
                    });
                  }}
                >
                  {t('add_to_cart')}
                </button>
              )}
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
