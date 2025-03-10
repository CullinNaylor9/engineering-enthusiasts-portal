
import { cn } from '@/lib/utils';
import { Bot, Mail, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-engineer-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-engineer-700" />
              <span className="text-xl font-semibold">YoungEngineers</span>
            </div>
            <p className="text-engineer-600 max-w-xs">
              Inspiring the next generation of innovators through robotics, coding, and electronics.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div className="space-y-4">
              <p className="text-base font-medium">Programs</p>
              <nav className="flex flex-col space-y-2 text-sm text-engineer-500">
                <a href="#robotics" className="hover:text-engineer-900 transition-colors">Robotics</a>
                <a href="#coding" className="hover:text-engineer-900 transition-colors">Coding</a>
                <a href="#electronics" className="hover:text-engineer-900 transition-colors">Electronics</a>
              </nav>
            </div>
            
            <div className="space-y-4">
              <p className="text-base font-medium">Resources</p>
              <nav className="flex flex-col space-y-2 text-sm text-engineer-500">
                <a href="https://inspire-course-bot.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-engineer-900 transition-colors">Online Courses</a>
                <a href="#" className="hover:text-engineer-900 transition-colors">Tutorials</a>
                <a href="#" className="hover:text-engineer-900 transition-colors">Projects</a>
              </nav>
            </div>
            
            <div className="space-y-4">
              <p className="text-base font-medium">Connect</p>
              <nav className="flex flex-col space-y-2 text-sm text-engineer-500">
                <a href="#" className="flex items-center space-x-2 hover:text-engineer-900 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>Contact Us</span>
                </a>
                <div className="flex space-x-3 pt-1">
                  <a href="#" className="text-engineer-400 hover:text-engineer-900 transition-colors">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="text-engineer-400 hover:text-engineer-900 transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-engineer-400 hover:text-engineer-900 transition-colors">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-engineer-100">
          <div className="text-center text-sm text-engineer-500">
            <p>&copy; {currentYear} YoungEngineers. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
