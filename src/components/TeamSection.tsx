
import { cn } from '@/lib/utils';
import { GraduationCap, Mail, LinkedinIcon, GithubIcon } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    email?: string;
    linkedin?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Johnson",
    role: "Robotics Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    bio: "Ph.D. in Robotics Engineering with 10+ years of experience teaching young minds about automation and robotics.",
    social: {
      email: "sarah@youngengineers.com",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/"
    }
  },
  {
    name: "Mark Williams",
    role: "Coding Instructor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    bio: "Former software developer at Google with a passion for teaching children the fundamentals of programming in a fun, engaging way.",
    social: {
      email: "mark@youngengineers.com",
      linkedin: "https://linkedin.com/"
    }
  },
  {
    name: "Elena Rodriguez",
    role: "Electronics Specialist",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    bio: "Electronics engineer specializing in circuit design and embedded systems. Elena makes complex electronics concepts accessible to students of all ages.",
    social: {
      email: "elena@youngengineers.com",
      github: "https://github.com/"
    }
  },
  {
    name: "David Chen",
    role: "Program Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    bio: "With a background in education and engineering, David oversees curriculum development and ensures all programs meet the highest standards.",
    social: {
      email: "david@youngengineers.com",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/"
    }
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-engineer-100 mb-4">
            <GraduationCap className="h-6 w-6 text-engineer-700" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-engineer-700">
            Our passionate educators bring real-world experience to inspire the next generation of engineers
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">
                  {member.name}
                </h3>
                <div className="mb-3">
                  <span className="chip">
                    {member.role}
                  </span>
                </div>
                <p className="text-engineer-700 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex space-x-3">
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`} 
                      className="p-2 rounded-full bg-engineer-50 text-engineer-700 hover:bg-engineer-100 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-engineer-50 text-engineer-700 hover:bg-engineer-100 transition-colors"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-engineer-50 text-engineer-700 hover:bg-engineer-100 transition-colors"
                      aria-label={`GitHub profile of ${member.name}`}
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
