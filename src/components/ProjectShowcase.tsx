
import { cn } from '@/lib/utils';
import AnimatedImage from './AnimatedImage';
import { ExternalLink, GraduationCap } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Science' | 'Technology' | 'Engineering' | 'Mathematics';
}

const projects: Project[] = [
  {
    title: "We Do 2.0",
    description: "Learn about plant biology and sustainable agriculture by designing and building an efficient indoor growing system.",
    imageSrc: "data:image/jpeg;base64,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",
    difficulty: "Intermediate",
    category: "Science"
  },
  {
    title: "Mobile Weather Station",
    description: "Create a digital weather station that collects, analyzes, and displays environmental data.",
    imageSrc: "https://images.unsplash.com/photo-1567701193142-5a75211a2eda?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    difficulty: "Intermediate",
    category: "Technology"
  },
  {
    title: "Autonomous Robot",
    description: "Build a robot that navigates its environment using sensors and programming logic.",
    imageSrc: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    difficulty: "Advanced",
    category: "Engineering"
  },
  {
    title: "Data Visualization App",
    description: "Develop an interactive application that transforms complex data sets into meaningful visual representations.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    difficulty: "Advanced",
    category: "Mathematics"
  },
  {
    title: "Biodiversity Survey",
    description: "Conduct a local biodiversity study using scientific sampling techniques and analysis.",
    imageSrc: "https://images.unsplash.com/photo-1560324600-13d63b78c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    difficulty: "Beginner",
    category: "Science"
  },
  {
    title: "3D Geometric Modeling",
    description: "Apply mathematical principles to create and analyze 3D models of geometric structures.",
    imageSrc: "https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    difficulty: "Intermediate",
    category: "Mathematics"
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
            Explore some of the exciting STEM projects our students have created
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
                  <span className={cn(
                    "chip text-xs",
                    project.category === "Science" ? "bg-amber-100 text-amber-800" :
                    project.category === "Technology" ? "bg-blue-100 text-blue-800" :
                    project.category === "Engineering" ? "bg-purple-100 text-purple-800" :
                    "bg-green-100 text-green-800"
                  )}>
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
