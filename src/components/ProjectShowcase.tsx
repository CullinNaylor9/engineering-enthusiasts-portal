
import { cn } from '@/lib/utils';
import AnimatedImage from './AnimatedImage';
import { ExternalLink, GraduationCap } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Robotics' | 'Coding' | 'Electronics';
}

const projects: Project[] = [
  {
    title: "Line-Following Robot",
    description: "Build a robot that can follow a line path using sensors and basic programming.",
    imageSrc: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    difficulty: "Beginner",
    category: "Robotics"
  },
  {
    title: "Weather Station",
    description: "Create a digital weather station that collects and displays environmental data.",
    imageSrc: "https://images.unsplash.com/photo-1567701193142-5a75211a2eda?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    difficulty: "Intermediate",
    category: "Electronics"
  },
  {
    title: "Mobile Game Development",
    description: "Design and code your own mobile game using modern game development tools.",
    imageSrc: "https://images.unsplash.com/photo-1624466664783-286c522a9151?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    difficulty: "Advanced",
    category: "Coding"
  },
];

const ProjectShowcase = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-engineer-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-engineer-100 mb-4">
            <GraduationCap className="h-6 w-6 text-engineer-700" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Student Projects
          </h2>
          <p className="text-lg text-engineer-700">
            Explore some of the exciting projects our students have built
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="relative">
                <AnimatedImage
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={cn(
                    "inline-block px-3 py-1 text-xs font-medium rounded-full",
                    project.difficulty === "Beginner" ? "bg-green-100 text-green-800" :
                    project.difficulty === "Intermediate" ? "bg-blue-100 text-blue-800" :
                    "bg-purple-100 text-purple-800"
                  )}>
                    {project.difficulty}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="chip text-xs">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-engineer-700 mb-4">
                  {project.description}
                </p>
                <a 
                  href="https://inspire-course-bot.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  Learn how to build this
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://inspire-course-bot.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-primary inline-flex items-center"
          >
            See more projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
