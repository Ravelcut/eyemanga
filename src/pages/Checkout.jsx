import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import './Checkout.css';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { items: contextItems, cartTotal: contextTotal, baseTotal, discountAmount, appliedPromo, applyPromo, removePromo } = useCart();
  const { user } = useAuth();
  const { t, lang } = useLanguage();
  const product = location.state?.product;
  const cartItems = location.state?.cart || contextItems;
  const total = appliedPromo ? contextTotal : (location.state?.total || product?.price || contextTotal || 0);
  
  const [customerName, setCustomerName] = useState(user?.email || '');
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const orderId = Math.floor(1000 + Math.random() * 9000);
  
  const itemsListText = cartItems.map(item => `- ${item.name || (lang === 'ka' ? (item.title_ka || item.title) : (item.title || item.name))} ${item.quantity ? `(x${item.quantity})` : ''}`).join('\n');
  const promoText = appliedPromo ? `\n🎟️ ${t('promo_code')}: ${appliedPromo.code} (-${appliedPromo.discount}%)` : '';
  const orderText = `🛒 ORDER #${orderId}\n------------------\n👤 ${lang === 'ka' ? 'სახელი' : 'Name'}: ${customerName}\n📦 ${lang === 'ka' ? 'ნივთები' : 'Items'}:\n${itemsListText}${promoText}\n💰 ${lang === 'ka' ? 'ჯამი' : 'Total'}: ${t('cur_sym')}${total.toFixed(2)}\n📝 ${lang === 'ka' ? 'შენიშვნა' : 'Notes'}: ${notes || (lang === 'ka' ? 'არ არის' : 'None')}\n------------------\n(Generated via Eye Manga)`;

  const handleApplyPromo = () => {
    setPromoError('');
    const result = applyPromo(promoInput);
    if (!result.success) {
      if (result.error === 'limit_reached') {
        setPromoError(t('promo_limit_reached'));
      } else {
        setPromoError(t('invalid_promo'));
      }
    } else {
      setPromoInput('');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(orderText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenInstagram = () => {
    window.open('https://www.instagram.com/eye_manga_official/', '_blank');
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container manga-panel">
        <h1 className="checkout-title">{t('finalize_order')}</h1>
        
        <div className="order-summary">
          <h3>{t('your_selection')}:</h3>
          <div className="items-list">
            {cartItems.map((item, idx) => (
              <div key={idx} className="order-item">
                <span>{item.name || (lang === 'ka' ? (item.title_ka || item.title) : (item.title || item.name))} {item.quantity ? `(x${item.quantity})` : ''}</span>
                <span>{t('cur_sym')}{(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </div>
            ))}
          </div>
          {appliedPromo && (
            <div className="order-item discount-line">
              <span>{t('discount')} ({appliedPromo.discount}%):</span>
              <span>-{t('cur_sym')}{discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="order-total">
            <span>{t('total')}:</span>
            <span>{t('cur_sym')}{total.toFixed(2)}</span>
          </div>
        </div>

        <div className="promo-section">
          <label>{t('promo_code')}</label>
          <div className="promo-input-group">
            <input 
              type="text" 
              value={promoInput} 
              onChange={(e) => setPromoInput(e.target.value)}
              placeholder="e.g. START20"
              disabled={!!appliedPromo}
            />
            <button 
              className="apply-btn" 
              onClick={appliedPromo ? removePromo : handleApplyPromo}
            >
              {appliedPromo ? 'X' : t('apply')}
            </button>
          </div>
          {promoError && <p className="promo-error">{promoError}</p>}
          {appliedPromo && <p className="promo-success">{t('promo_applied')}</p>}
        </div>

        <div className="order-form">
          <label>{t('name_label')}</label>
          <input 
            type="text" 
            value={customerName} 
            onChange={(e) => setCustomerName(e.target.value)} 
            placeholder={t('name_placeholder')}
          />

          <label>{t('notes_label')}</label>
          <textarea 
            value={notes} 
            onChange={(e) => setNotes(e.target.value)} 
            placeholder={t('notes_placeholder')}
          />
        </div>

        <div className="checkout-actions">
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? `✅ ${t('copied')}` : `📋 ${t('copy_order')}`}
          </button>
          
          <p className="instruction-text">
            {t('instruction')}
          </p>

          <button className="ig-send-btn" onClick={handleOpenInstagram}>
            📸 {t('send_ig')}
          </button>
        </div>

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← {t('back_to_catalog')}
        </button>
      </div>
    </div>
  );
}
