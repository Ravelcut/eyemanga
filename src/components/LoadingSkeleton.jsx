import './LoadingSkeleton.css';

export default function LoadingSkeleton({ count = 6 }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="skeleton-card manga-panel">
          <div className="skeleton-image skeleton-pulse"></div>
          <div className="skeleton-content">
            <div className="skeleton-line skeleton-line-title skeleton-pulse"></div>
            <div className="skeleton-line skeleton-line-price skeleton-pulse"></div>
          </div>
        </div>
      ))}
    </>
  );
}
