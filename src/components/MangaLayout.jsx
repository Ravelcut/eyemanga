import React from 'react';
import './MangaLayout.css';

export default function MangaLayout({ children }) {
  return (
    <main className="manga-layout-wrapper">
      <div className="manga-grid">
        {children}
      </div>
    </main>
  );
}
