
import { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CalendarIcon } from 'lucide-react';
import { Event, events } from '@/types/EventTypes';
import CategoryFilters from '@/components/events/CategoryFilters';
import EventsList from '@/components/events/EventsList';

const EventsCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [activeCategory, setActiveCategory] = useState<Event['category'] | 'all'>('all');
  
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    
    if (selectedDate) {
      const filtered = events.filter(event => {
        const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
        const matchesDate = event.exactDate && 
          event.exactDate.getDate() === selectedDate.getDate() &&
          event.exactDate.getMonth() === selectedDate.getMonth() &&
          event.exactDate.getFullYear() === selectedDate.getFullYear();
        
        return matchesCategory && (matchesDate || !event.exactDate);
      });
      setFilteredEvents(filtered);
    } else {
      filterEventsByCategory(activeCategory);
    }
  };
  
  const filterEventsByCategory = (category: Event['category'] | 'all') => {
    setActiveCategory(category);
    
    if (category === 'all') {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(event => event.category === category);
      setFilteredEvents(filtered);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-engineer-100 mb-4">
              <CalendarIcon className="h-6 w-6 text-engineer-700" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Events Calendar
            </h1>
            <p className="text-lg text-engineer-700">
              Browse all our upcoming STEM events and activities
            </p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="bg-white rounded-xl shadow-subtle p-4 overflow-hidden">
                <h2 className="font-semibold text-lg mb-4">Date</h2>
                <div className="w-full flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateSelect}
                    className="rounded-md border"
                  />
                </div>
                
                <div className="mt-6">
                  <CategoryFilters 
                    activeCategory={activeCategory} 
                    onCategoryChange={filterEventsByCategory} 
                  />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-8 lg:col-span-9">
              <EventsList events={filteredEvents} selectedDate={date} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsCalendar;

