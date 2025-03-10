import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Code, CircuitBoard, Menu, X, ExternalLink, Calendar, Users, BookOpen, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedImage from './AnimatedImage';

const navLinks = [
  { name: 'Technology', icon: CircuitBoard, href: '#technology' },
  { name: 'Engineering', icon: Code, href: '#engineering' },
  { name: 'Math', icon: Calculator, href: '#math' },
  { name: 'Curriculum', icon: BookOpen, href: '#curriculum' },
  { name: 'Team', icon: Users, href: '#team' },
  { name: 'Events', icon: Calendar, href: '#events' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      const sections = ['science', 'technology', 'engineering', 'math', 'curriculum', 'team', 'events'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-apple',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-subtle' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <div className="flex-shrink-0 h-8 w-8 md:h-10 md:w-10 relative overflow-hidden">
              <img 
                src="https://learning.bishopsprep.org.za/prospective2022/wp-content/uploads/sites/53/2021/05/favicon.png" 
                alt="STEM Bishops Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-semibold text-lg tracking-tight whitespace-nowrap">STEM Bishops</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ name, href, icon: Icon }) => (
              <button
                key={name}
                onClick={() => scrollToSection(href.slice(1))}
                className={cn(
                  "flex items-center space-x-1.5 text-sm font-medium transition-colors duration-300 relative",
                  activeSection === href.slice(1) 
                    ? "text-primary" 
                    : "text-engineer-800 hover:text-primary"
                )}
              >
                <Icon size={16} />
                <span>{name}</span>
                {activeSection === href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
            <a 
              href="https://inspire-course-bot.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary inline-flex items-center"
            >
              Course Access
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </nav>

          <button 
            className="md:hidden flex items-center p-2 rounded-md focus-visible-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div 
        className={cn(
          'md:hidden bg-white/95 backdrop-blur-md absolute left-0 right-0 shadow-subtle overflow-hidden transition-all duration-500 ease-apple border-b border-engineer-100',
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 py-5 space-y-4">
          {navLinks.map(({ name, href, icon: Icon }) => (
            <button
              key={name}
              onClick={() => scrollToSection(href.slice(1))}
              className="flex w-full items-center space-x-2 p-3 rounded-lg hover:bg-engineer-50 transition-colors"
            >
              <Icon size={18} className={activeSection === href.slice(1) ? "text-primary" : ""} />
              <span className={activeSection === href.slice(1) ? "text-primary font-medium" : ""}>
                {name}
              </span>
            </button>
          ))}
          <a 
            href="https://inspire-course-bot.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block button-primary text-center mt-4 inline-flex items-center justify-center w-full"
          >
            Course Access
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
