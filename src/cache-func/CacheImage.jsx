import React, { useEffect, useState } from 'react';
import { cacheImage, getCachedImage } from './indexedDB';

export const CachedImage = ({ src, alt, className}) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      try {
        const cachedURL = await getCachedImage(src);
        setImageSrc(cachedURL);
      } catch (error) {
        console.warn(error);
        cacheImage(src).then(() => {
          setImageSrc(src);
        });
      }
    };

    loadImage();
  }, [src]);

  return <img src={imageSrc} alt={alt} className={className ? className :'' } />;
};

