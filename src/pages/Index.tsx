
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import CourseLink from '@/components/CourseLink';
import Footer from '@/components/Footer';
import { Bot, Code, CircuitBoard } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <FeatureCard
          id="robotics"
          title="Robotics for Future Innovators"
          description="Learn to design, build, and program robots with our hands-on approach. From simple mechanisms to advanced robotics concepts, our program helps young engineers develop problem-solving skills while having fun."
          imageSrc="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          icon={Bot}
        />
        
        <FeatureCard
          id="coding"
          title="Coding & Software Development"
          description="Discover the magic of bringing ideas to life through code. Our programming curriculum covers everything from block-based coding for beginners to text-based languages for advanced students, fostering computational thinking and creativity."
          imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          icon={Code}
          reversed
        />
        
        <FeatureCard
          id="electronics"
          title="Electronics & Circuit Design"
          description="Explore the fundamentals of electronics and circuit design. Students learn about components, schematics, and prototyping while building exciting projects that blend technology with creativity."
          imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          icon={CircuitBoard}
        />
        
        <CourseLink />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
