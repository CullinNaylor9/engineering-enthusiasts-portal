
import { cn } from '@/lib/utils';

const VideoSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            See Our Engineers in Action
          </h2>
          <p className="text-lg text-engineer-700">
            Watch young innovators create amazing projects with robotics and coding
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl aspect-video rounded-xl overflow-hidden shadow-elevated">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/c_r3dG53vjQ?si=_0qa6yybblvybzQB&amp;controls=0&amp;start=2" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
