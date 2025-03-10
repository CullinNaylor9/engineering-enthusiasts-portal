
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'auto' | 'square' | 'video' | 'portrait';
  priority?: boolean;
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
  priority = false
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);

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
    setHasError(true);
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
      {(isInView || priority) && !hasError && (
        <img
          src={src}
          alt={alt}
          className={cn(
            'h-full w-full object-cover transition-all duration-700',
            isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-[1.05]'
          )}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-engineer-100 text-engineer-500">
          <img 
            src="https://i.postimg.cc/ZKTkCQ4K/IMG-1691.jpg" 
            alt="Fallback image" 
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default AnimatedImage;
