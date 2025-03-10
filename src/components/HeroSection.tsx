import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, Bot, CircuitBoard, Code } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToContent = () => {
    const firstSection = document.getElementById('robotics');
    if (firstSection) {
      window.scrollTo({
        top: firstSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const heroFeatures = [
    { icon: Bot, text: "Hands-on Robotics" },
    { icon: Code, text: "Creative Coding" },
    { icon: CircuitBoard, text: "Circuit Design" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-engineer-900/90 to-engineer-800/80 z-10"></div>
        <iframe 
          className="absolute w-full h-full scale-[1.5] object-cover"
          src="https://www.youtube.com/embed/c_r3dG53vjQ?si=_0qa6yybblvybzQB&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=c_r3dG53vjQ&amp;start=2" 
          title="Background Video" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Background gradient - now just adding a little extra overlay */}
      <div className="absolute inset-0 hero-gradient opacity-50 -z-10" />
      
      {/* Abstract pattern - made more transparent */}
      <div 
        className="absolute inset-0 opacity-10 -z-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div 
            className={cn(
              "chip mb-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span>Inspiring Young Innovators</span>
          </div>
          
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-tight md:leading-tight pb-4 transition-all duration-700 delay-100 text-white",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Building Tomorrow's Engineers <span className="block text-white/90">Today</span>
          </h1>
          
          <p 
            className={cn(
              "mt-6 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Discover the exciting world of robotics, coding, and electronics through hands-on learning and creative projects.
          </p>
          
          <div 
            className={cn(
              "mt-8 flex justify-center space-x-4 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {heroFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center px-4 py-3"
              >
                <div className="bg-white/20 p-3 rounded-full shadow-subtle backdrop-blur-sm mb-2">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-white">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <div 
            className={cn(
              "mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-700 delay-400",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <a 
              href="https://inspire-course-bot.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary min-w-[180px] bg-white text-engineer-800 hover:bg-white/90"
            >
              Explore Courses
            </a>
            <button 
              onClick={scrollToContent}
              className="button-secondary min-w-[180px] border-white text-white hover:bg-white/10"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-1000 delay-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <button 
          onClick={scrollToContent}
          className="flex items-center justify-center h-12 w-12 rounded-full bg-white/20 shadow-elevated backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 text-white" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
