
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <section id="design" className="section-padding">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="text-primary font-medium">Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Design is How it Works
              </h2>
              <p className="text-muted-foreground text-lg">
                We believe that true design goes beyond aesthetics. It's about 
                creating experiences that seamlessly blend form and function.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:200ms]">
                <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/20 rounded-2xl glass-card p-5">
                  <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-xl flex items-center justify-center">
                    <div className="w-1/2 aspect-square bg-primary/10 rounded-full flex items-center justify-center animate-float">
                      <div className="w-2/3 aspect-square bg-primary/20 rounded-full flex items-center justify-center">
                        <div className="w-2/3 aspect-square bg-primary/40 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 animate-fade-in [animation-delay:400ms]">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
                  <p className="text-muted-foreground">
                    We strip away complexity to reveal clarity. Every element has a 
                    purpose, and we carefully consider what to include and what to leave out.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Coherence</h3>
                  <p className="text-muted-foreground">
                    A unified design language creates harmony across the experience, 
                    making interactions feel natural and intuitive.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">User-Centered</h3>
                  <p className="text-muted-foreground">
                    We design around human needs and behaviors, creating experiences 
                    that feel like extensions of yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="about" className="section-padding bg-primary/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto glass-card p-10 animate-scale-in">
              <h2 className="text-3xl font-bold mb-6 text-center">
                About Our Approach
              </h2>
              <p className="text-muted-foreground mb-5">
                We believe that design is not just about how something looks, but how it works. 
                Our approach combines minimalist aesthetics with functional design principles, 
                creating experiences that are both beautiful and useful.
              </p>
              <p className="text-muted-foreground">
                By focusing on simplicity, attention to detail, and user-centered design, 
                we create products that feel intuitive and delightful to use. Every pixel, 
                every interaction, and every transition has been carefully considered to 
                create a cohesive and elegant experience.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
