import { useAuth } from '../context/AuthContext';
import './LoginGate.css';

export default function LoginGate({ children }) {
  const { user, isLoading, loginWithInstagram } = useAuth();

  if (user) return children;

  return (
    <div className="login-gate">
      <div className="login-bg-effects">
        <div className="speed-line speed-line-1"></div>
        <div className="speed-line speed-line-2"></div>
        <div className="halftone-overlay"></div>
      </div>
      
      <div className="login-content manga-panel">
        <div className="login-eyeball">
          <svg viewBox="0 0 100 50" width="120" height="60" aria-hidden="true">
            <path d="M10,25 Q50,-5 90,25 Q50,55 10,25" fill="none" stroke="currentColor" strokeWidth="6" />
            <circle cx="50" cy="25" r="10" fill="currentColor" />
            <circle cx="50" cy="25" r="4" fill="var(--bg-color)" />
          </svg>
        </div>
        
        <h1 className="login-title">Eye Manga</h1>
        <p className="login-subtitle">A RESTRICTED AREA BEYOND THE SIGHT</p>
        
        <div className="login-actions">
          <button 
            className={`login-btn-ig ${isLoading ? 'is-loading' : ''}`}
            onClick={loginWithInstagram}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading-dots">Authenticating...</span>
            ) : (
              <>
                <span className="ig-icon">📸</span> LOGIN WITH INSTAGRAM
              </>
            )}
          </button>
        </div>
        
        <p className="login-footer-text">
          By entering, you agree to our terms of sight.
        </p>
      </div>
    </div>
  );
}
