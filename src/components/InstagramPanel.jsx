import { useState } from 'react';
import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './InstagramPanel.css';

export default function InstagramPanel() {
  const [isFollowing, setIsFollowing] = useState(false);
  const { t } = useLanguage();

  const posts = [
    { id: 1, img: '/assets/eye1.png', likes: '1.2k', comments: '45', caption: t('ig_caption_1') },
    { id: 2, img: '/assets/eye2.png', likes: '2.4k', comments: '82', caption: t('ig_caption_2') },
    { id: 3, img: '/assets/eye3.png', likes: '1.8k', comments: '61', caption: t('ig_caption_3') },
    { id: 4, img: 'https://picsum.photos/300/300?grayscale&random=20', likes: '930', comments: '22', caption: t('ig_caption_4') },
  ];

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
          <p>{t('follow_us_ig')}</p>
        </div>
        <button className="follow-btn" onClick={() => setIsFollowing(prev => !prev)}>
          {isFollowing ? t('following') : t('follow')}
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
