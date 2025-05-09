
import { cn } from '@/lib/utils';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events } from '@/types/EventTypes';
import { getCategoryLabel, getCategoryStyles } from '@/utils/categoryUtils';

const UpcomingEventsSection = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-engineer-100 mb-4">
            <Calendar className="h-6 w-6 text-engineer-700" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-engineer-700">
            Join us for these exciting events and start your engineering journey
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={cn(
                      "inline-block px-3 py-1 text-xs font-medium rounded-full",
                      getCategoryStyles(event.category)
                    )}>
                      {getCategoryLabel(event.category)}
                    </span>
                  </div>
                </div>
                <div className="lg:w-3/5 p-6 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4 text-sm text-engineer-700">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-engineer-500" />
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
                  <a 
                    href={event.registrationUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Register now
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/events" 
            className="button-primary inline-flex items-center"
          >
            View All Events Calendar
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
