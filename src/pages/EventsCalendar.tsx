
import { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar as CalendarIcon, MapPin, Clock, ExternalLink } from 'lucide-react';
import { format } from "date-fns";
import { cn } from '@/lib/utils';

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'workshop' | 'competition' | 'open-day' | 'camp' | 'extra-murals';
  imageUrl: string;
  registrationUrl: string;
  locationUrl?: string;
  exactDate?: Date;
}

const events: Event[] = [
  {
    title: "Young Engineers",
    date: "Monday",
    time: "4:15pm to 5:15pm",
    location: "STEM Room",
    description: "An afternoon to do fun tech projects and learn about coding and programming your own robots while learning important engineering skills.",
    category: "extra-murals",
    imageUrl: "https://i.postimg.cc/4N4yTFvw/IMG-1884.jpg",
    registrationUrl: "https://inspire-course-bot.vercel.app/",
    locationUrl: "https://maps.app.goo.gl/xsBjH7M3NZGLW8Fr9",
    exactDate: new Date(2023, 5, 5)
  },
  {
    title: "Coding Weekend Workshop",
    date: "School Holidays",
    time: "To be confirmed",
    location: "Maths Room",
    description: "An intensive two-day coding workshop where participants will build their own web applications and games under the guidance of industry professionals.",
    category: "workshop",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    registrationUrl: "https://inspire-course-bot.vercel.app/",
    locationUrl: "https://maps.app.goo.gl/xsBjH7M3NZGLW8Fr9",
    exactDate: new Date(2023, 6, 15)
  },
  {
    title: "Robotics Showcase",
    date: "Friday",
    time: "3:00pm to 5:30pm",
    location: "School Hall",
    description: "Students demonstrate their robotic creations in an interactive showcase highlighting innovation and problem-solving skills.",
    category: "competition",
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    registrationUrl: "https://inspire-course-bot.vercel.app/",
    exactDate: new Date(2023, 7, 10)
  },
  {
    title: "Mathematics Olympiad",
    date: "Wednesday",
    time: "2:00pm to 4:00pm",
    location: "Main Campus",
    description: "A challenging competition testing mathematical problem-solving skills across various disciplines.",
    category: "competition",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    registrationUrl: "https://inspire-course-bot.vercel.app/",
    exactDate: new Date(2023, 8, 20)
  },
  {
    title: "Summer STEM Camp",
    date: "Summer Break",
    time: "9:00am to 3:00pm daily",
    location: "School Campus",
    description: "A week-long immersive experience exploring various STEM fields through hands-on projects and expert guidance.",
    category: "camp",
    imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    registrationUrl: "https://inspire-course-bot.vercel.app/",
    exactDate: new Date(2023, 6, 25)
  }
];

const getCategoryStyles = (category: Event['category']) => {
  switch (category) {
    case 'workshop':
      return 'bg-blue-100 text-blue-800';
    case 'competition':
      return 'bg-purple-100 text-purple-800';
    case 'open-day':
      return 'bg-green-100 text-green-800';
    case 'camp':
      return 'bg-amber-100 text-amber-800';
    case 'extra-murals':
      return 'bg-emerald-100 text-emerald-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getCategoryLabel = (category: Event['category']) => {
  switch (category) {
    case 'workshop':
      return 'Workshop';
    case 'competition':
      return 'Competition';
    case 'open-day':
      return 'Open Day';
    case 'camp':
      return 'Camp';
    case 'extra-murals':
      return 'Extra Murals';
    default:
      return category;
  }
};

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
              <div className="bg-white rounded-xl shadow-subtle p-6">
                <h2 className="font-semibold text-lg mb-4">Date</h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  className="rounded-md border"
                />
                
                <div className="mt-8">
                  <h2 className="font-semibold text-lg mb-4">Filter by Type</h2>
                  <div className="space-y-2">
                    <Button 
                      variant={activeCategory === 'all' ? "default" : "outline"} 
                      className="w-full justify-start" 
                      onClick={() => filterEventsByCategory('all')}
                    >
                      All Events
                    </Button>
                    <Button 
                      variant={activeCategory === 'workshop' ? "default" : "outline"} 
                      className="w-full justify-start" 
                      onClick={() => filterEventsByCategory('workshop')}
                    >
                      Workshops
                    </Button>
                    <Button 
                      variant={activeCategory === 'competition' ? "default" : "outline"} 
                      className="w-full justify-start" 
                      onClick={() => filterEventsByCategory('competition')}
                    >
                      Competitions
                    </Button>
                    <Button 
                      variant={activeCategory === 'open-day' ? "default" : "outline"} 
                      className="w-full justify-start" 
                      onClick={() => filterEventsByCategory('open-day')}
                    >
                      Open Days
                    </Button>
                    <Button 
                      variant={activeCategory === 'camp' ? "default" : "outline"} 
                      className="w-full justify-start" 
                      onClick={() => filterEventsByCategory('camp')}
                    >
                      Camps
                    </Button>
                    <Button 
                      variant={activeCategory === 'extra-murals' ? "default" : "outline"} 
                      className="w-full justify-start" 
                      onClick={() => filterEventsByCategory('extra-murals')}
                    >
                      Extra Murals
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-8 lg:col-span-9">
              <div className="bg-white rounded-xl shadow-subtle p-6">
                <h2 className="text-2xl font-semibold mb-6">
                  {date ? (
                    <>Events for {format(date, "MMMM d, yyyy")}</>
                  ) : (
                    <>All Events</>
                  )}
                </h2>
                
                {filteredEvents.length === 0 ? (
                  <div className="text-center py-12">
                    <CalendarIcon className="mx-auto h-12 w-12 text-engineer-300" />
                    <h3 className="mt-4 text-lg font-medium">No events found</h3>
                    <p className="mt-2 text-engineer-500">
                      Try selecting a different date or category
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredEvents.map((event, index) => (
                      <div 
                        key={index} 
                        className="flex flex-col md:flex-row gap-6 p-4 rounded-lg border border-engineer-100 hover:border-engineer-200 transition-all"
                      >
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
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsCalendar;
