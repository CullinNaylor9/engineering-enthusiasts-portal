import { cn } from '@/lib/utils';
import AnimatedImage from './AnimatedImage';
import { ExternalLink, GraduationCap } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Science' | 'Technology' | 'Engineering' | 'Mathematics';
  learnMoreUrl?: string;
  linkText?: string;
}

const projects: Project[] = [
  {
    title: "We Do 2.0",
    description: "Build interactive LEGO models and learn coding fundamentals by programming robots that move, react, and solve problems.",
    imageSrc: "https://m.media-amazon.com/images/I/618VhB2JqfL._AC_SL1500_.jpg",
    difficulty: "Beginner",
    category: "Technology",
    learnMoreUrl: "https://education.lego.com/en-us/products/lego-education-wedo-2-0-core-set/45300/",
    linkText: "Where to buy this"
  },
  {
    title: "Parts of a Flower",
    description: "Create a flower by assembling different parts and learn about plant structures while exploring material properties.",
    imageSrc: "https://i.postimg.cc/FK15hDBb/buulluk.jpg",
    difficulty: "Beginner",
    category: "Science"
  },
  {
    title: "Plastic Molding Project",
    description: "Learn to mold plastic with a heat gun to create custom promotional products and develop basic advertising concepts for real-world applications.",
    imageSrc: "https://i.postimg.cc/cL98jGVQ/IMG-1881.jpg",
    difficulty: "Intermediate",
    category: "Engineering"
  },
  {
    title: "Orthographic Drawing",
    description: "Learn technical drawing techniques to represent three-dimensional objects in multiple two-dimensional views following engineering standards.",
    imageSrc: "https://i.postimg.cc/VLpBBH2K/de97830a0d3aae1c795668dba3c25da5.jpg",
    difficulty: "Intermediate",
    category: "Mathematics"
  },
  {
    title: "LEGO Mindstorms EV3",
    description: "Build programmable robots using LEGO Mindstorms EV3 and learn basic programming and robotics concepts.",
    imageSrc: "https://i.postimg.cc/xT1wqPj8/IMG-1824.jpg",
    difficulty: "Advanced",
    category: "Technology",
    learnMoreUrl: "https://education.lego.com/en-us/products/lego-mindstorms-education-ev3-core-set/5003400/",
    linkText: "Where to buy this"
  },
  {
    title: "3D Printer",
    description: "Apply mathematical principles to create and analyze 3D models of geometric structures.",
    imageSrc: "https://i.postimg.cc/130nnCSn/Creality-K1-C-AI-Camera-Hyperspeed-3-D-Printer.webp",
    difficulty: "Intermediate",
    category: "Mathematics",
    learnMoreUrl: "https://3dstore.co.za/product/creality-k1-se-3d-printer/?utm_source=Google%20Shopping&utm_campaign=3D%20Feed&utm_medium=cpc&utm_term=3022&utm_source=Google+Ads&utm_id=3DStore+PMAX+ENGLISH&gad_source=1",
    linkText: "Where to buy this"
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
                {project.learnMoreUrl && (
                  <a 
                    href={project.learnMoreUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                  >
                    {project.linkText || "Where to buy this"}
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                )}
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
