
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The robotics program helped my daughter develop problem-solving skills and confidence. She now wants to be an engineer!",
    author: "Adam Farquharson",
    role: "Student, Age 11"
  },
  {
    quote: "I've learned more about coding in two months here than I did in a year at school. The hands-on projects are amazing.",
    author: "Michael McCollum",
    role: "Student, Age 11"
  },
  {
    quote: "The instructors make complex concepts accessible and fun. My son looks forward to every class.",
    author: "Elizabeth Chunanu",
    role: "Parent"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-engineer-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-engineer-700">
            Hear from parents and students about their experiences with our programs
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-subtle hover:shadow-elevated transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="mb-4 text-engineer-300">
                <Quote size={32} />
              </div>
              <blockquote className="mb-4 text-lg italic text-engineer-800">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6">
                <p className="font-medium text-engineer-900">{testimonial.author}</p>
                <p className="text-sm text-engineer-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
