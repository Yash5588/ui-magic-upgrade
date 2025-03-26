
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse-slow delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in [animation-delay:200ms]">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium inline-block mb-6">
              Introducing New Design
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Experience Design <br className="hidden md:block" />
              <span className="text-primary">Reimagined</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:pr-10">
              A thoughtful redesign of the modern interface, 
              with a focus on elegance, simplicity, and an 
              unparalleled user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full px-8 py-6 text-base">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in [animation-delay:400ms]">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-3xl blur-2xl opacity-70"></div>
              <div className="glass-card p-6 relative">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden">
                  <div className="w-3/4 h-3/4 rounded-2xl glass-dark flex items-center justify-center animate-float shadow-lg">
                    <div className="w-3/4 h-3/4 rounded-xl bg-primary/80 flex items-center justify-center shadow-inner">
                      <div className="text-white text-4xl font-bold">A</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
