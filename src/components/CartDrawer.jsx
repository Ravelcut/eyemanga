import { useCart } from '../context/CartContext';
import { FiX, FiPlus, FiMinus, FiTrash2, FiSend } from 'react-icons/fi';
import './CartDrawer.css';

export default function CartDrawer() {
  const { items, isOpen, closeCart, cartTotal, cartCount, updateQuantity, removeFromCart, checkout, clearCart } = useCart();

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'cart-overlay-visible' : ''}`} onClick={closeCart} />
      <aside className={`cart-drawer ${isOpen ? 'cart-drawer-open' : ''}`}>
        <div className="cart-drawer-header">
          <h2>Your Cart ({cartCount})</h2>
          <button className="cart-close-btn" onClick={closeCart} aria-label="Close cart">
            <FiX />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty</p>
            <span className="cart-empty-icon">👁️</span>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                    <div className="cart-item-controls">
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <FiMinus />
                      </button>
                      <span className="qty-display">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <FiPlus />
                      </button>
                      <button
                        className="qty-btn remove-btn"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span className="cart-total-price">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="checkout-btn" onClick={checkout}>
                <FiSend /> Checkout via Instagram
              </button>
              <button className="clear-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
