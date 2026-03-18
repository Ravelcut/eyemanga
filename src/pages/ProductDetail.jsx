import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { FiShoppingCart, FiArrowLeft } from 'react-icons/fi';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();
  const product = getProductById(id);

  const [selectedVolume, setSelectedVolume] = useState(() => {
    const firstVol = product?.volumes?.[0]?.number || 1;
    return firstVol;
  });

  if (!product) {
    return (
      <div className="page-product-detail">
        <div className="product-not-found">
          <h1>{lang === 'ka' ? 'პროდუქტი ვერ მოიძებნა' : 'Product Not Found'}</h1>
          <p>{lang === 'ka' ? 'თქვენ მიერ ძიებული პროდუქტი არ არსებობს.' : "The product you're looking for doesn't exist."}</p>
          <Link to="/catalog" className="back-link">
            <FiArrowLeft /> {lang === 'ka' ? 'კატალოგში დაბრუნება' : 'Back to Catalog'}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = products
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
    : [];

  const handleAddToCart = () => {
    if (!product.volumes) return;
    const vol = product.volumes.find(v => v.number === selectedVolume);
    if (!vol) return;
    addToCart({
      ...product,
      id: `${product.id}-v${selectedVolume}`,
      seriesId: product.id,
      selectedVolume: selectedVolume,
      price: vol.price,
      name: `${lang === 'ka' ? product.title_ka : product.title} - ${t('volume')} ${selectedVolume}`
    });
  };

  const volumeObj = product.volumes?.find(v => v.number === selectedVolume);
  const currentPrice = volumeObj?.price || 0;
  const displayImage = volumeObj?.image || product.image;

  return (
    <div className="page-product-detail">
      <div className="product-detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft /> {lang === 'ka' ? 'უკან' : 'Back'}
        </button>

        <div className="product-detail-layout">
          <div className="product-detail-image manga-panel">
            <img src={displayImage} alt={product.title} />
          </div>

          <div className="product-detail-info">
            <span className="product-category-badge">{t(product.category)}</span>
            <h1 className="product-detail-title">{lang === 'ka' ? product.title_ka : product.title}</h1>
            <p className="product-detail-price">{t('cur_sym')}{currentPrice.toFixed(2)}</p>
            
            <div className="volume-selector">
              <h3>{t('select_volume')}</h3>
              <div className="volume-grid">
                {product.volumes.map(vol => (
                  <button 
                    key={vol.number}
                    className={`volume-btn ${selectedVolume === vol.number ? 'active' : ''}`}
                    onClick={() => setSelectedVolume(vol.number)}
                  >
                    {vol.number}
                  </button>
                ))}
              </div>
            </div>

            <p className="product-detail-desc">{lang === 'ka' ? product.description_ka : product.description}</p>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <FiShoppingCart /> {t('add_to_cart')}
            </button>

          </div>
        </div>

        {related.length > 0 && (
          <section className="related-section">
            <div className="section-header">
              <h2 className="section-title">{lang === 'ka' ? 'მსგავსი' : 'Related'}</h2>
              <div className="section-line"></div>
            </div>
            <div className="related-grid">
              {related.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="related-card manga-panel">
                  <img src={p.image} alt={p.title} />
                  <div className="related-card-info">
                    <h4>{lang === 'ka' ? p.title_ka : p.title}</h4>
                    <p>{t('cur_sym')}{(p.volumes?.[0]?.price || 0).toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
}
