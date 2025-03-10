
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import CourseLink from '@/components/CourseLink';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProjectShowcase from '@/components/ProjectShowcase';
import FaqSection from '@/components/FaqSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import CurriculumSection from '@/components/CurriculumSection';
import UpcomingEventsSection from '@/components/UpcomingEventsSection';
import { Code, CircuitBoard, Calculator } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Feature sections */}
        <div className="bg-white">
          <FeatureCard
            id="technology"
            title="Technology"
            description="Develop technical fluency in our rapidly evolving digital world. Students learn about computer systems, networks, cybersecurity, and digital citizenship while mastering essential tech skills through interactive projects."
            imageSrc="https://i.postimg.cc/ZKTkCQ4K/IMG-1691.jpg"
            icon={CircuitBoard}
          />
          
          <FeatureCard
            id="engineering"
            title="Engineering & Design Thinking"
            description="Learn to solve problems like an engineer. Our project-based curriculum teaches the engineering design process, from identifying challenges to creating, testing, and refining solutions while building technical skills."
            imageSrc="https://i.postimg.cc/Sxy39Kp1/IMG-1804.jpg"
            icon={Code}
          />
          
          <FeatureCard
            id="math"
            title="Mathematics in Action"
            description="Experience mathematics as a powerful tool for understanding our world. Beyond calculations, students develop mathematical reasoning, problem-solving strategies, and the ability to apply math concepts to real-world situations."
            imageSrc="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            icon={Calculator}
          />
        </div>
        
        {/* Curriculum section */}
        <CurriculumSection />
        
        {/* Team section */}
        <TeamSection />
        
        {/* Upcoming events section */}
        <UpcomingEventsSection />
        
        {/* Project showcase section */}
        <ProjectShowcase />
        
        {/* Testimonials section */}
        <TestimonialsSection />
        
        {/* Course link section */}
        <CourseLink />
        
        {/* FAQ section */}
        <FaqSection />
        
        {/* Newsletter signup */}
        <NewsletterSignup />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
