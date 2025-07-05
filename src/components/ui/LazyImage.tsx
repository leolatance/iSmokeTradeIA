import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number | string;
  height?: number | string;
  placeholder?: React.ReactNode;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  loading = 'lazy',
  width,
  height,
  placeholder,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading === 'lazy' && imgRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = src;
              observer.unobserve(img);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(imgRef.current);

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }
  }, [src, loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    } else {
      onError?.();
    }
  };

  const imageProps: React.ImgHTMLAttributes<HTMLImageElement> = {
    ...props,
    alt,
    className: `${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`,
    width,
    height,
    onLoad: handleLoad,
    onError: handleError,
    loading: loading as 'eager' | 'lazy',
    decoding: 'async',
    ...(loading === 'eager' && { src: currentSrc })
  };

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && placeholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
          {placeholder}
        </div>
      )}
      
      {!isLoaded && !placeholder && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20 animate-pulse"
          style={{ width, height }}
        />
      )}

      {hasError && !fallbackSrc ? (
        <div 
          className="flex items-center justify-center bg-muted/20 text-muted-foreground text-sm"
          style={{ width, height }}
        >
          Erro ao carregar imagem
        </div>
      ) : (
        <img ref={imgRef} {...imageProps} />
      )}
    </div>
  );
};

export default LazyImage; 