import React, { useState } from 'react';
import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa';
import './InstagramPanel.css';

const posts = [
  { id: 1, img: '/assets/eye1.png', likes: '1.2k', comments: '45', caption: 'Volume 4 Limited Edition Cover ❤️' },
  { id: 2, img: '/assets/eye2.png', likes: '2.4k', comments: '82', caption: 'The embroidery detail on our new hoodies is insane.' },
  { id: 3, img: '/assets/eye3.png', likes: '1.8k', comments: '61', caption: 'Sneak peek of the next chapter...' },
  { id: 4, img: 'https://picsum.photos/300/300?grayscale&random=20', likes: '930', comments: '22', caption: 'Exclusive drop tomorrow at 6PM PST.' },
];

export default function InstagramPanel() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <article className="instagram-panel">
      <div className="ig-header">
        <div className="ig-title">
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaInstagram />
            <a href="https://www.instagram.com/eye_manga_official/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              @eye_manga_official
            </a>
          </h2>
          <p>Follow us on Instagram</p>
        </div>
        <button className="follow-btn" onClick={() => setIsFollowing(prev => !prev)}>
          {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
        </button>
      </div>
      <div className="ig-grid">
        {posts.map(post => (
          <div key={post.id} className="ig-post-wrapper group">
            <img src={post.img} alt="Instagram post" className="ig-post" />
            <div className="ig-hover-stats">
              <p className="ig-caption-peek">{post.caption}</p>
              <div className="ig-stats-row">
                <span><FaHeart /> {post.likes}</span>
                <span><FaComment /> {post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
