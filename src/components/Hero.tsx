
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hello, I'm{' '}
                <br />
                <span className="text-foreground">Vinay Kumar</span>
                <br />
                <span className="text-primary text-2xl sm:text-3xl lg:text-4xl xl:text-5xl italic font-medium">Full-Stack Developer & Machine Learning Engineer</span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group">
                <a href="#projects" className="flex items-center space-x-2">
                  <span>View Projects</span>
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="sm:hidden">
                <a href="https://drive.google.com/file/d/10qtcPktu_88ERFycmLTb5Ojx8lskMzpx/view" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating tags */}
              <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10">
                <span className="text-sm font-medium">React.js</span>
              </div>
              <div className="absolute -top-4 -right-8 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10">
                <span className="text-sm font-medium">Pandas</span>
              </div>
              <div className="absolute top-1/4 -right-8 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10">
                <span className="text-sm font-medium">JS</span>
              </div>
              <div className="absolute top-1/2 -left-8 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10">
                <span className="text-sm font-medium">Numpy</span>
              </div>
              <div className="absolute -bottom-8 right-1/4 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10">
                <span className="text-sm font-medium">Node.js</span>
              </div>
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl p-2">
                <img
                  src="/profile.jpg"
                  alt="Profile photo"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;



