
import { LayoutGrid, Layers, Lightbulb, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Thoughtful Design",
    description: "Every pixel placed with purpose, creating an interface that feels intuitive and natural."
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Attention to Detail",
    description: "Meticulous craftsmanship brings life to subtle interactions and transitions."
  },
  {
    icon: <LayoutGrid className="h-8 w-8" />,
    title: "Precise Layout",
    description: "A mathematical approach to spacing and alignment creates visual harmony."
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Intuitive Experience",
    description: "Functionality that anticipates needs, making complexity feel simple."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in [animation-delay:200ms]">
          <span className="text-primary font-medium">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Designed with Purpose
          </h2>
          <p className="text-muted-foreground text-lg">
            Our approach combines minimalist aesthetics with functional design principles, 
            creating an experience that's both beautiful and useful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 hover-scale animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="text-primary mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
