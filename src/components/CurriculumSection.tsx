
import { cn } from '@/lib/utils';
import { BookOpen, CheckCircle, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseModule {
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  category: 'Science' | 'Technology' | 'Engineering' | 'Mathematics';
}

const modules: CourseModule[] = [
  {
    title: "Engineering Design Process",
    description: "Learn to think like an engineer and solve problems through design thinking.",
    duration: "6 weeks",
    level: "Intermediate",
    category: "Engineering",
    topics: [
      "Engineering design cycle",
      "Prototyping methods",
      "Material properties and selection",
      "CAD fundamentals",
      "Testing and iteration",
      "Sustainable design principles"
    ]
  },
  {
    title: "Mathematical Problem Solving",
    description: "Develop mathematical reasoning and apply it to solve real-world challenges.",
    duration: "12 weeks",
    level: "Intermediate",
    category: "Mathematics",
    topics: [
      "Logical reasoning and proof",
      "Mathematical modeling",
      "Data analysis and statistics",
      "Spatial reasoning and geometry",
      "Patterns and algebra",
      "Applied mathematics"
    ]
  },
  {
    title: "Digital Technology",
    description: "Explore the fundamentals of computer technology and digital systems.",
    duration: "10 weeks",
    level: "Beginner",
    category: "Technology",
    topics: [
      "Computer hardware basics",
      "Operating systems",
      "Networks and internet",
      "Cybersecurity fundamentals",
      "Digital literacy",
      "Emerging technologies"
    ]
  },
  {
    title: "Go Karting",
    description: "A fun time to make a go kart and race it against different people.",
    duration: "8 weeks",
    level: "Intermediate",
    category: "Engineering",
    topics: [
      "Mechanical engineering basics",
      "Vehicle dynamics",
      "Engine fundamentals",
      "Safety systems",
      "Race strategy",
      "Team collaboration"
    ]
  },
];

const getCategoryColor = (category: CourseModule['category']) => {
  switch (category) {
    case 'Science':
      return 'bg-amber-100 text-amber-800';
    case 'Technology':
      return 'bg-blue-100 text-blue-800';
    case 'Engineering':
      return 'bg-purple-100 text-purple-800';
    case 'Mathematics':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const CurriculumSection = () => {
  return (
    <section id="curriculum" className="py-16 md:py-24 bg-engineer-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4">
            <BookOpen className="h-6 w-6 text-engineer-700" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Our STEM Curriculum
          </h2>
          <p className="text-lg text-engineer-700">
            Comprehensive learning experiences designed to develop critical thinking and problem-solving across science, technology, engineering, and mathematics
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <div className="mb-3">
                  <span className={cn(
                    "inline-block text-xs font-medium py-1 px-2 rounded",
                    getCategoryColor(module.category)
                  )}>
                    {module.category}
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
          <Link 
            to="/curriculum" 
            className="button-primary inline-flex items-center"
          >
            View Full Curriculum
            <Star className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
