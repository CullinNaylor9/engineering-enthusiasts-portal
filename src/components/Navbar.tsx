
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CircuitBoard, Code, Bot, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Robotics', icon: Bot, href: '#robotics' },
  { name: 'Coding', icon: Code, href: '#coding' },
  { name: 'Electronics', icon: CircuitBoard, href: '#electronics' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-apple',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-subtle' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <span className="font-semibold text-lg tracking-tight">YoungEngineers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                className="flex items-center space-x-1.5 text-sm font-medium text-engineer-800 hover:text-primary transition-colors duration-300"
              >
                <Icon size={16} />
                <span>{name}</span>
              </a>
            ))}
            <a 
              href="https://inspire-course-bot.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary"
            >
              Course Access
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center p-2 rounded-md focus-visible-ring"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          'md:hidden bg-white absolute left-0 right-0 overflow-hidden transition-all duration-500 ease-apple border-b border-engineer-100',
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-4 py-5 space-y-4">
          {navLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-engineer-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Icon size={18} />
              <span>{name}</span>
            </a>
          ))}
          <a 
            href="https://inspire-course-bot.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block button-primary text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Course Access
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
