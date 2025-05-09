
import { cn } from '@/lib/utils';
import AnimatedImage from './AnimatedImage';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: LucideIcon;
  className?: string;
  id?: string;
}

const FeatureCard = ({
  title,
  description,
  imageSrc,
  icon: Icon,
  className,
  id,
}: FeatureCardProps) => {
  return (
    <div 
      id={id}
      className={cn(
        'relative py-16 md:py-24',
        className
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 items-center lg:grid-cols-[1.2fr_1fr] xl:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-engineer-100">
              <Icon className="h-6 w-6 text-engineer-700" />
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                {title}
              </h2>
              <p className="text-lg text-engineer-700 max-w-lg">
                {description}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto max-w-[500px] lg:max-w-none">
              <AnimatedImage
                src={imageSrc}
                alt={title}
                aspectRatio="auto"
                className="rounded-2xl overflow-hidden shadow-elevated hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
