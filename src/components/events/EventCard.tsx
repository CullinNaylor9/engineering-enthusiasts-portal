
import { cn } from '@/lib/utils';
import { Event } from '@/types/EventTypes';
import { getCategoryLabel, getCategoryStyles } from '@/utils/categoryUtils';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, MapPin, ExternalLink } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 rounded-lg border border-engineer-100 hover:border-engineer-200 transition-all">
      <div className="md:w-1/4 h-40 md:h-auto relative overflow-hidden rounded-lg">
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className={cn(
            "inline-block px-3 py-1 text-xs font-medium rounded-full",
            getCategoryStyles(event.category)
          )}>
            {getCategoryLabel(event.category)}
          </span>
        </div>
      </div>
      
      <div className="md:w-3/4 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">
          {event.title}
        </h3>
        
        <div className="space-y-2 mb-4 text-sm text-engineer-700">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-2 text-engineer-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-engineer-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-engineer-500" />
            {event.locationUrl ? (
              <a 
                href={event.locationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline"
              >
                {event.location}
              </a>
            ) : (
              <span>{event.location}</span>
            )}
          </div>
        </div>
        
        <p className="text-engineer-700 text-sm mb-4 flex-grow">
          {event.description}
        </p>
        
        <div className="mt-auto">
          <Button asChild size="sm">
            <a 
              href={event.registrationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              Register now
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
