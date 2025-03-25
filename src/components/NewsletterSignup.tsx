import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section className="py-16 md:py-20 px-4 bg-engineer-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-engineer-800 mb-6">
            <Mail className="h-6 w-6 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Sign Up Now to YoungEngineers
          </h2>
          
          <p className="text-lg text-engineer-300 mb-8 max-w-xl mx-auto">
            Join our newsletter for the latest workshops, tips, and student success stories
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3 flex-col sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow px-4 py-3 rounded-full text-engineer-900 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "button-primary bg-primary whitespace-nowrap",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              <p className="mt-3 text-sm text-engineer-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="animate-fade-in flex flex-col items-center text-center">
              <div className="bg-green-500/10 p-4 rounded-full mb-4">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Thank You for Subscribing!</h3>
              <p className="text-engineer-300">
                You're now on the list to receive updates from YoungEngineers.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;

