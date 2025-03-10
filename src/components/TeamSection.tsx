
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
    name: "Mark Erlangsen",
    role: "Co-Founder & Lead Instructor",
    image: "https://i.postimg.cc/NM3JNs2X/Erlangseenn.jpg",
    bio: "Experienced instructor with a passion for engineering education and making complex concepts accessible to students of all ages.",
    social: {
      email: "mark@youngengineers.com",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/"
    }
  },
  {
    name: "Cullin Naylor",
    role: "Co-Founder & Curriculum Director",
    image: "https://i.postimg.cc/4xGCf5dc/Cullin.jpg",
    bio: "Passionate student committed to empowering peers through hands-on, project-based learning experiences in STEM education.",
    social: {
      email: "cullin@youngengineers.com",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/"
    }
  }
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

        <div className="grid gap-8 md:grid-cols-2 mx-auto max-w-3xl">
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
