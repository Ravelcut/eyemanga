import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCatalog.css';

export default function ProductCatalog({ products = [] }) {
  const { addToCart } = useCart();

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
              <h3>{product.title}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <button
                className="buy-button"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
