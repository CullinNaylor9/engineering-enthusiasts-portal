
import { cn } from '@/lib/utils';
import { BookOpen, CheckCircle, Star, Calendar } from 'lucide-react';

interface CourseModule {
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
}

const modules: CourseModule[] = [
  {
    title: "Introduction to Robotics",
    description: "Learn the basics of robotics, from simple mechanisms to building your first robot.",
    duration: "8 weeks",
    level: "Beginner",
    topics: [
      "Basic robotics concepts",
      "Simple machine elements",
      "Sensors and actuators",
      "Building a basic robot",
      "Programming fundamentals for robots",
      "Robot challenges and competitions"
    ]
  },
  {
    title: "Coding Fundamentals",
    description: "Discover the building blocks of programming through engaging, hands-on projects.",
    duration: "10 weeks",
    level: "Beginner",
    topics: [
      "Introduction to algorithms",
      "Scratch programming",
      "JavaScript basics",
      "Problem-solving with code",
      "Creating simple games",
      "Web development basics"
    ]
  },
  {
    title: "Electronics Workshop",
    description: "Explore the world of electronics, circuits, and components through practical projects.",
    duration: "6 weeks",
    level: "Intermediate",
    topics: [
      "Basic circuit theory",
      "Electronic components",
      "Circuit design and analysis",
      "Building electronic projects",
      "Microcontrollers introduction",
      "Troubleshooting skills"
    ]
  },
  {
    title: "Advanced Robotics Projects",
    description: "Take your robotics skills to the next level with complex, real-world applications.",
    duration: "12 weeks",
    level: "Advanced",
    topics: [
      "Autonomous navigation",
      "Computer vision for robots",
      "Artificial intelligence basics",
      "Advanced sensor integration",
      "Multi-robot systems",
      "Competition-ready robots"
    ]
  },
];

const CurriculumSection = () => {
  return (
    <section id="curriculum" className="py-16 md:py-24 bg-engineer-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4">
            <BookOpen className="h-6 w-6 text-engineer-700" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Our Curriculum
          </h2>
          <p className="text-lg text-engineer-700">
            Hands-on learning experiences designed to inspire young engineers and develop essential skills
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">
                    {module.title}
                  </h3>
                  <span className={cn(
                    "inline-block px-3 py-1 text-xs font-medium rounded-full",
                    module.level === "Beginner" ? "bg-green-100 text-green-800" :
                    module.level === "Intermediate" ? "bg-blue-100 text-blue-800" :
                    "bg-purple-100 text-purple-800"
                  )}>
                    {module.level}
                  </span>
                </div>
                <p className="text-engineer-700 mb-5">
                  {module.description}
                </p>
                <div className="flex items-center mb-5 text-sm text-engineer-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{module.duration}</span>
                </div>
                <h4 className="text-sm font-medium text-engineer-800 mb-3">
                  What you'll learn:
                </h4>
                <ul className="space-y-2">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-engineer-700">{topic}</span>
                    </li>
                  ))}
                </ul>
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
            View Full Curriculum
            <Star className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
