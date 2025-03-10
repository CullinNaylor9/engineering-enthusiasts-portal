
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    const firstSection = document.getElementById('robotics');
    if (firstSection) {
      window.scrollTo({
        top: firstSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient -z-10" />
      
      {/* Abstract pattern */}
      <div 
        className="absolute inset-0 opacity-30 -z-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="chip mb-6 animate-fade-in">
            <span>Inspiring Young Innovators</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-tight md:leading-tight pb-4 animate-fade-up">
            Building Tomorrow's Engineers <span className="block text-engineer-600">Today</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-engineer-700 max-w-3xl mx-auto animate-fade-up [animation-delay:200ms]">
            Discover the exciting world of robotics, coding, and electronics through hands-on learning and creative projects.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-up [animation-delay:400ms]">
            <a 
              href="https://inspire-course-bot.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary min-w-[180px]"
            >
              Explore Courses
            </a>
            <button 
              onClick={scrollToContent}
              className="button-secondary min-w-[180px]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToContent}
          className="flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-elevated hover:shadow-prominent transition-all duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 text-engineer-700" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
