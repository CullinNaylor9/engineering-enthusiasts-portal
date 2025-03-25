
import { Event } from '@/types/EventTypes';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import EventCard from './EventCard';

interface EventsListProps {
  events: Event[];
  selectedDate?: Date;
}

const EventsList = ({ events, selectedDate }: EventsListProps) => {
  return (
    <div className="bg-white rounded-xl shadow-subtle p-6">
      <h2 className="text-2xl font-semibold mb-6">
        {selectedDate ? (
          <>Events for {format(selectedDate, "MMMM d, yyyy")}</>
        ) : (
          <>All Events</>
        )}
      </h2>
      
      {events.length === 0 ? (
        <div className="text-center py-12">
          <CalendarIcon className="mx-auto h-12 w-12 text-engineer-300" />
          <h3 className="mt-4 text-lg font-medium">No events found</h3>
          <p className="mt-2 text-engineer-500">
            Try selecting a different date or category
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsList;
