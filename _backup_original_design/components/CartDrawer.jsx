import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { FiX, FiPlus, FiMinus, FiTrash2, FiSend } from 'react-icons/fi';
import './CartDrawer.css';

export default function CartDrawer() {
  const navigate = useNavigate();
  const { items, isOpen, closeCart, cartTotal, cartCount, updateQuantity, removeFromCart, checkout, clearCart } = useCart();
  const { t, lang } = useLanguage();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout', { state: { cart: items, total: cartTotal } });
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'cart-overlay-visible' : ''}`} onClick={closeCart} />
      <aside className={`cart-drawer ${isOpen ? 'cart-drawer-open' : ''}`}>
        <div className="cart-drawer-header">
          <h2>{t('cart')} ({cartCount})</h2>
          <button className="cart-close-btn" onClick={closeCart} aria-label="Close cart">
            <FiX />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>{t('empty_cart')}</p>
            <span className="cart-empty-icon">👁️</span>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4>{item.name || (lang === 'ka' ? item.title_ka : item.title)}</h4>
                    <p className="cart-item-price">{t('cur_sym')}{item.price.toFixed(2)}</p>
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
                <span>{t('total')}</span>
                <span className="cart-total-price">{t('cur_sym')}{cartTotal.toFixed(2)}</span>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                <FiSend /> {t('checkout')}
              </button>
              <button className="clear-btn" onClick={clearCart}>
                {t('clear_cart')}
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
