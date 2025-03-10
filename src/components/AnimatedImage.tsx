
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'auto' | 'square' | 'video' | 'portrait';
  priority?: boolean;
  fallbackSrc?: string;
}

const AspectRatioClasses = {
  auto: '',
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]'
};

const AnimatedImage = ({
  src,
  alt,
  className,
  aspectRatio = 'auto',
  priority = false,
  fallbackSrc
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '100px'
    });

    const element = document.getElementById(`image-${src.split('/').pop()}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.error('Image failed to load:', src);
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  const aspectClass = AspectRatioClasses[aspectRatio];

  return (
    <div 
      id={`image-${src.split('/').pop()}`}
      className={cn(
        'relative overflow-hidden bg-engineer-50',
        aspectClass,
        className
      )}
    >
      {(isInView || priority) && (
        <img
          src={imgSrc}
          alt={alt}
          className={cn(
            'h-full w-full object-contain transition-all duration-700',
            isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-[1.05]'
          )}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default AnimatedImage;
