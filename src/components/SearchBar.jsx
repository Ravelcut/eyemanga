import { FiSearch } from 'react-icons/fi';
import './SearchBar.css';

export default function SearchBar({ value, onChange, placeholder = 'Search products...' }) {
  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search products"
      />
      {value && (
        <button
          className="search-clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}
