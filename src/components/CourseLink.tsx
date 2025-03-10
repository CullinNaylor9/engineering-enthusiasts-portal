
import { cn } from '@/lib/utils';
import { ExternalLink, ArrowRight } from 'lucide-react';

const CourseLink = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-engineer-100/50 -z-10" />
      <div 
        className="absolute inset-0 -z-10 opacity-30" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-5xl mx-auto relative">
        <div className="glass-card p-8 md:p-12 rounded-3xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl space-y-4">
              <div className="chip">
                <span>Educational Resource</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Ready to take your skills to the next level?
              </h2>
              <p className="text-lg text-engineer-700">
                Visit our comprehensive course platform for structured learning paths, interactive tutorials, and project-based lessons.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="https://inspire-course-bot.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  "button-primary group flex items-center justify-center gap-2",
                  "text-base px-8 py-4"
                )}
              >
                Access Courses
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <div className="mt-3 flex items-center justify-center text-sm text-engineer-500">
                <ExternalLink className="h-4 w-4 mr-1" />
                <span>Opens in a new tab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseLink;
