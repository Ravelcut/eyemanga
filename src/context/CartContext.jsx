import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { products } from '../data/products';
import { useLanguage } from './LanguageContext';

const CartContext = createContext();

const STORAGE_KEY = 'eyemanga_cart';

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [storedItems, setStoredItems] = useState(loadCart);
  const [isOpen, setIsOpen] = useState(false);
  const { lang, t } = useLanguage();

  // Hydrate stored minimal items with fresh localized data from products.js
  const items = useMemo(() => {
    return storedItems.map(item => {
      // Find the base series
      const series = products.find(p => p.id === (item.seriesId || item.id.split('-v')[0]));
      if (!series) return item;

      // Find the specific volume if applicable
      const volNum = item.selectedVolume || (item.id.includes('-v') ? Number(item.id.split('-v')[1]) : null);
      const vol = series.volumes?.find(v => Number(v.number) === Number(volNum));

      const localizedTitle = lang === 'ka' ? series.title_ka : series.title;
      const volumeSuffix = volNum !== null ? ` - ${t('volume')} ${volNum}` : '';

      return {
        ...item,
        title: localizedTitle,
        title_ka: series.title_ka,
        price: vol?.price || series.volumes?.[0]?.price || item.price || 0,
        image: vol?.image || series.image,
        name: `${localizedTitle}${volumeSuffix}`,
        category: series.category
      };
    });
  }, [storedItems, lang, t]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedItems));
  }, [storedItems]);

  const addToCart = (product) => {
    setStoredItems(prev => {
      // Use a consistent ID for the cart item (series + volume)
      const cartItemId = product.selectedVolume 
        ? `${product.seriesId || product.id}-v${product.selectedVolume}` 
        : (product.id.includes('-v') ? product.id : `${product.id}-v1`);

      const existing = prev.find(item => item.id === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Store minimal data to ensure dynamic hydration works
      return [...prev, { 
        id: cartItemId, 
        seriesId: product.seriesId || product.id.split('-v')[0],
        selectedVolume: product.selectedVolume || (product.id.includes('-v') ? Number(product.id.split('-v')[1]) : 1),
        quantity: 1 
      }];
    });
  };

  const removeFromCart = (id) => {
    setStoredItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setStoredItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setStoredItems([]);
  };

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen(prev => !prev);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = items.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);

  const checkout = () => {
    const itemList = items.map(i => `${i.name} x${i.quantity}`).join(', ');
    const message = `Hi! I'd like to order from Eye Manga:\n${itemList}\nTotal: ${cartTotal.toFixed(2)} GEL`;
    const dmLink = `https://ig.me/m/eye_manga_official?text=${encodeURIComponent(message)}`;
    window.open(dmLink, '_blank');
  };

  return (
    <CartContext.Provider value={{
      items, isOpen, cartCount, cartTotal,
      addToCart, removeFromCart, updateQuantity, clearCart,
      openCart, closeCart, toggleCart, checkout,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
