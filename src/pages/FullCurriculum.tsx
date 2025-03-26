import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, BookOpen, Star, Download, Clock, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  learningOutcomes: string[];
  category: 'Science' | 'Technology' | 'Engineering' | 'Mathematics';
  imageUrl: string;
}

const curriculumModules: Module[] = [
  {
    id: "eng-design-process",
    title: "Engineering Design Process",
    description: "Learn to think like an engineer and solve problems through design thinking.",
    duration: "6 weeks",
    level: "Intermediate",
    category: "Engineering",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: [
      "Engineering design cycle",
      "Prototyping methods",
      "Material properties and selection",
      "CAD fundamentals",
      "Testing and iteration",
      "Sustainable design principles"
    ],
    learningOutcomes: [
      "Apply the engineering design process to solve real-world problems",
      "Create and evaluate prototypes based on design criteria",
      "Select appropriate materials based on their properties",
      "Design 3D models using CAD software",
      "Conduct systematic testing and make design improvements",
      "Incorporate sustainability principles into engineering solutions"
    ]
  },
  {
    id: "math-problem-solving",
    title: "Mathematical Problem Solving",
    description: "Develop mathematical reasoning and apply it to solve real-world challenges.",
    duration: "12 weeks",
    level: "Intermediate",
    category: "Mathematics",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: [
      "Logical reasoning and proof",
      "Mathematical modeling",
      "Data analysis and statistics",
      "Spatial reasoning and geometry",
      "Patterns and algebra",
      "Applied mathematics"
    ],
    learningOutcomes: [
      "Develop logical arguments and mathematical proofs",
      "Create mathematical models to represent real-world situations",
      "Analyze data sets and draw statistical conclusions",
      "Apply geometric principles to solve spatial problems",
      "Recognize and extend patterns using algebraic reasoning",
      "Use mathematics to solve authentic, contextual problems"
    ]
  },
  {
    id: "advanced-robotics",
    title: "Advanced Robotics",
    description: "Design and program sophisticated robots for complex tasks and competitions.",
    duration: "14 weeks",
    level: "Advanced",
    category: "Engineering",
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: [
      "Autonomous navigation",
      "Sensor integration",
      "Control systems",
      "AI and machine learning basics",
      "Mechanical design principles",
      "Competition strategies"
    ],
    learningOutcomes: [
      "Design robots capable of autonomous navigation",
      "Integrate and calibrate multiple sensors for environmental perception",
      "Implement control systems for precise robot movement",
      "Apply basic machine learning algorithms to robotics challenges",
      "Design efficient mechanical systems for specific robotics tasks",
      "Develop effective strategies for robotics competitions"
    ]
  },
  {
    id: "go-karting",
    title: "Go Karting",
    description: "A fun time to make a go kart and race it against different people.",
    duration: "8 weeks",
    level: "Intermediate",
    category: "Engineering",
    imageUrl: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: [
      "Mechanical engineering basics",
      "Vehicle dynamics",
      "Engine fundamentals",
      "Safety systems",
      "Race strategy",
      "Team collaboration"
    ],
    learningOutcomes: [
      "Design and build a functional go-kart",
      "Apply principles of mechanics and physics to vehicle design",
      "Implement safety features and protocols",
      "Optimize vehicle performance through testing and modification",
      "Develop racing strategies and techniques",
      "Work effectively in a team environment"
    ]
  },
  {
    id: "programming-fundamentals",
    title: "Programming Fundamentals",
    description: "Learn the basics of programming with Python, focusing on problem-solving and algorithmic thinking.",
    duration: "8 weeks",
    level: "Beginner",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: [
      "Variables and data types",
      "Control structures",
      "Functions and modules",
      "Data structures",
      "File I/O",
      "Introduction to object-oriented programming"
    ],
    learningOutcomes: [
      "Write basic Python programs to solve problems",
      "Implement control structures for program flow",
      "Create and use functions to modularize code",
      "Work with lists, dictionaries, and other data structures",
      "Read from and write to files programmatically",
      "Apply basic object-oriented programming concepts"
    ]
  },
  {
    id: "science-experiments",
    title: "Scientific Investigation",
    description: "Design and conduct experiments using the scientific method to explore natural phenomena.",
    duration: "10 weeks",
    level: "Beginner",
    category: "Science",
    imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: [
      "Scientific method",
      "Experimental design",
      "Data collection techniques",
      "Statistical analysis",
      "Laboratory safety",
      "Research reporting"
    ],
    learningOutcomes: [
      "Design controlled experiments to test hypotheses",
      "Collect and record accurate experimental data",
      "Apply appropriate statistical methods to analyze results",
      "Draw evidence-based conclusions from experimental data",
      "Present research findings effectively using scientific conventions",
      "Practice safe laboratory procedures"
    ]
  },
  {
    id: "electronics-basics",
    title: "Electronics Fundamentals",
    description: "Explore the basics of electronics through hands-on circuit building and analysis.",
    duration: "8 weeks",
    level: "Beginner",
    category: "Technology",
    imageUrl: "https://i.postimg.cc/ZnxQmWyK/electronics-LARGE-1024x700.jpg",
    topics: [
      "Circuit theory",
      "Electronic components",
      "Circuit design and analysis",
      "Digital logic",
      "Microcontrollers introduction",
      "Electronic measurements"
    ],
    learningOutcomes: [
      "Build and analyze basic electronic circuits",
      "Identify and use common electronic components",
      "Apply Ohm's law and Kirchhoff's laws to circuit analysis",
      "Design simple digital logic circuits",
      "Program basic functions on microcontrollers",
      "Use multimeters and oscilloscopes for circuit measurements"
    ]
  }
];

const getCategoryColor = (category: Module['category']) => {
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

const getLevelColor = (level: Module['level']) => {
  switch (level) {
    case 'Beginner':
      return 'bg-green-100 text-green-800';
    case 'Intermediate':
      return 'bg-blue-100 text-blue-800';
    case 'Advanced':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const FullCurriculum = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | Module['category']>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredModules, setFilteredModules] = useState<Module[]>(curriculumModules);
  
  useEffect(() => {
    let filtered = curriculumModules;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(module => module.category === activeCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(module => 
        module.title.toLowerCase().includes(query) || 
        module.description.toLowerCase().includes(query) ||
        module.topics.some(topic => topic.toLowerCase().includes(query))
      );
    }
    
    setFilteredModules(filtered);
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="inline-flex items-center text-engineer-600 hover:text-engineer-800 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to home
              </Link>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                STEM Bishops Full Curriculum
              </h1>
              <p className="mt-3 text-lg text-engineer-700 max-w-3xl">
                Explore our comprehensive curriculum designed to develop critical thinking and problem-solving across science, technology, engineering, and mathematics.
              </p>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center space-x-2 button-primary"
              onClick={(e) => {
                e.preventDefault();
                alert('Curriculum PDF would download here');
              }}
            >
              <Download className="h-4 w-4" />
              <span>Download Curriculum</span>
            </a>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={(value) => setActiveCategory(value as 'all' | Module['category'])}>
                <TabsList className="grid grid-cols-3 md:grid-cols-5 gap-1 w-full md:w-auto">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="Science">Science</TabsTrigger>
                  <TabsTrigger value="Technology">Technology</TabsTrigger>
                  <TabsTrigger value="Engineering">Engineering</TabsTrigger>
                  <TabsTrigger value="Mathematics">Mathematics</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="relative w-full md:w-72">
                <input
                  type="text"
                  placeholder="Search curriculum..."
                  className="w-full px-4 py-2 border border-engineer-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {filteredModules.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredModules.map((module) => (
                <div key={module.id} className="bg-white rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300">
                  <div className="h-48 overflow-hidden rounded-t-xl">
                    <img 
                      src={module.imageUrl} 
                      alt={module.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getLevelColor(module.level)}`}>
                        {module.level}
                      </span>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getCategoryColor(module.category)}`}>
                        {module.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mt-2 mb-2">
                      {module.title}
                    </h3>
                    
                    <p className="text-engineer-700 mb-4">
                      {module.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-engineer-600 mb-4">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{module.duration}</span>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium">Key Topics:</h4>
                      <ul className="text-sm text-engineer-700 space-y-1">
                        {module.topics.slice(0, 3).map((topic, idx) => (
                          <li key={idx} className="flex items-start">
                            <Star className="h-3 w-3 text-primary mt-1 mr-2 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                        {module.topics.length > 3 && (
                          <li className="text-engineer-600 text-xs">
                            + {module.topics.length - 3} more topics
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4">
                      View Module Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-engineer-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">No modules found</h3>
              <p className="text-engineer-600">
                Try adjusting your search criteria or category filter
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                Reset filters
              </Button>
            </div>
          )}
          
          <div className="mt-20 p-8 bg-engineer-50 rounded-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  Ready to start your STEM journey?
                </h2>
                <p className="text-lg text-engineer-700">
                  Enroll in our curriculum today and develop the skills needed for success in the technology-driven future. Our hands-on approach ensures engaging and effective learning.
                </p>
              </div>
              <a 
                href="https://inspire-course-bot.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button-primary min-w-[200px] text-center"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FullCurriculum;
