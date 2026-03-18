import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { FiShoppingCart, FiArrowLeft } from 'react-icons/fi';
import Footer from '../components/Footer';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="page-product-detail">
        <div className="product-not-found">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/catalog" className="back-link">
            <FiArrowLeft /> Back to Catalog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="page-product-detail">
      <div className="product-detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Back
        </button>

        <div className="product-detail-layout">
          <div className="product-detail-image manga-panel">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-detail-info">
            <span className="product-category-badge">{product.category}</span>
            <h1 className="product-detail-title">{product.title}</h1>
            <p className="product-detail-price">${product.price.toFixed(2)}</p>
            <p className="product-detail-desc">{product.description}</p>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <FiShoppingCart /> Add to Cart
            </button>
          </div>
        </div>

        {related.length > 0 && (
          <section className="related-section">
            <div className="section-header">
              <h2 className="section-title">Related</h2>
              <div className="section-line"></div>
            </div>
            <div className="related-grid">
              {related.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="related-card manga-panel">
                  <img src={p.image} alt={p.title} />
                  <div className="related-card-info">
                    <h4>{p.title}</h4>
                    <p>${p.price.toFixed(2)}</p>
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
