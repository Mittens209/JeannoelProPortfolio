import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#tech-stack', label: 'Tech Stack' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-glass bg-card/30 shadow-medium' 
        : 'backdrop-blur-glass bg-card/10'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold font-mono text-accent-yellow hover:text-primary transition-colors"
          >
            JDM
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-accent-yellow transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center">
            <Button 
              variant="outline" 
              className="bg-card/50 border-accent-yellow/50 hover:bg-accent-yellow hover:text-black hover:border-accent-yellow transition-all duration-300"
              asChild
            >
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 p-6 bg-secondary/30 backdrop-blur-glass rounded-xl shadow-strong border border-accent-yellow/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-accent-yellow transition-colors font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-end mt-4 pt-4 border-t border-accent-yellow/20">
                <Button 
                  variant="outline" 
                  className="bg-card/50 border-accent-yellow/50 hover:bg-accent-yellow hover:text-black shadow-soft hover:shadow-medium transition-all duration-300"
                  asChild
                >
                  <a href="#contact" onClick={() => setIsOpen(false)}>Let's Connect</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;