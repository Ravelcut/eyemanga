import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiSearch, FiMenu, FiX, FiLogOut } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Header() {
  const { cartCount, openCart } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <Link to="/" className="logo-container" onClick={closeMobile}>
        <svg viewBox="0 0 100 50" width="60" height="30" className="eye-logo" aria-label="Eye Manga Logo">
          <path d="M10,25 Q50,-5 90,25 Q50,55 10,25" fill="none" stroke="currentColor" strokeWidth="6" />
          <circle cx="50" cy="25" r="10" fill="currentColor" />
          <circle cx="50" cy="25" r="4" fill="var(--bg-color)" />
          <path d="M48,15 L52,15 L52,22 L48,22 Z" fill="var(--bg-color)" />
        </svg>
        <h1>Eye Manga</h1>
      </Link>

      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <FiX /> : <FiMenu />}
      </button>

      <nav className={`header-nav ${mobileOpen ? 'header-nav-open' : ''}`}>
        <NavLink to="/catalog" onClick={closeMobile}>
          <FiSearch /> Catalog
        </NavLink>
        <NavLink to="/about" onClick={closeMobile}>About</NavLink>
        <NavLink to="/contact" onClick={closeMobile}>Contact</NavLink>

        <div className="header-divider" />

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          {isDark ? <FaSun /> : <FaMoon />}
        </button>

        <button className="cart-btn" onClick={() => { openCart(); closeMobile(); }} aria-label="Open cart">
          <FiShoppingCart />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>

        {user && (
          <div className="user-profile-h">
            <img src={user.profilePic} alt={user.username} className="user-avatar-s" title={user.username} />
            <button className="logout-btn-h" onClick={logout} aria-label="Logout">
              <FiLogOut />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
