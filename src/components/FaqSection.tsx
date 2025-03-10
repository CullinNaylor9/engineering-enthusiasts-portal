
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What age groups do your programs accommodate?",
    answer: "Our programs are designed for students aged 8-18. We have beginner, intermediate, and advanced levels to match different experience levels and age groups."
  },
  {
    question: "Do I need to have any prior experience with robotics or coding?",
    answer: "Not at all! Our beginner programs start from the basics and are perfect for students with no prior experience. For those with some experience, we offer more advanced options."
  },
  {
    question: "What equipment or materials do students need for the courses?",
    answer: "All necessary equipment and materials are provided during in-person sessions. For online courses, we provide a detailed list of required materials before the course begins, with options to purchase kits directly from us."
  },
  {
    question: "How long are the typical programs?",
    answer: "Our programs vary in length. We offer weekend workshops (2-3 hours), weekly sessions (1-2 hours per week for 8-12 weeks), and intensive camps during school breaks (full-day programs for 1-2 weeks)."
  },
  {
    question: "Are there opportunities for students to showcase their projects?",
    answer: "Absolutely! We host regular showcases, competitions, and demo days where students can present their projects to peers, parents, and sometimes industry professionals."
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-engineer-100 mb-4">
            <HelpCircle className="h-6 w-6 text-engineer-700" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-engineer-700">
            Find answers to common questions about our programs
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-engineer-100">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full justify-between items-center text-left focus:outline-none"
              >
                <h3 className="text-xl font-medium text-engineer-900">
                  {faq.question}
                </h3>
                <span className="ml-6 flex-shrink-0 text-engineer-600">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>
              <div
                className={cn(
                  "mt-2 text-engineer-700 transition-all duration-300 overflow-hidden",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
