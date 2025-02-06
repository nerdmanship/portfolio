'use client';

import { useState } from 'react';
import styles from './Project.module.css';

export default function Project({ 
  title, 
  description, 
  type, // 'codepen', 'github', etc
  id,
  thumbnail, // static image for preview
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const getEmbed = () => {
    switch(type) {
      case 'codepen':
        return `https://codepen.io/nerdmanship/embed/${id}?default-tab=result`;
      // Add other platforms as needed
      default:
        return null;
    }
  };

  return (
    <div className={styles.project}>
      {!isLoaded && (
        <div 
          className={styles.preview}
          onClick={() => setIsLoaded(true)}
        >
          <img src={thumbnail} alt={title} />
          <div className={styles.overlay}>
            <span>Click to load project</span>
          </div>
        </div>
      )}
      
      {isLoaded && (
        <iframe
          src={getEmbed()}
          loading="lazy"
          className={styles.frame}
          title={title}
        />
      )}
    </div>
  );
} 