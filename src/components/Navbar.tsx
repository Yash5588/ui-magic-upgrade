
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="/" 
          className="text-2xl font-semibold relative z-10 flex items-center"
        >
          <span className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center mr-2">A</span>
          <span>Apple</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="link-underline font-medium">Features</a>
          <a href="#design" className="link-underline font-medium">Design</a>
          <a href="#about" className="link-underline font-medium">About</a>
          <Button className="bg-primary hover:bg-primary/90 rounded-full px-6">
            Get Started
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 transition-all" />
          ) : (
            <Menu className="h-6 w-6 transition-all" />
          )}
        </button>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white dark:bg-gray-900 z-0 flex md:hidden">
            <div className="flex flex-col items-center justify-center space-y-8 w-full text-lg animate-fade-in">
              <a 
                href="#features" 
                className="font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#design" 
                className="font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Design
              </a>
              <a 
                href="#about" 
                className="font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Button 
                className="bg-primary hover:bg-primary/90 rounded-full px-8 py-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
