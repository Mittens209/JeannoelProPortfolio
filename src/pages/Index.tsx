import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm opacity-90">
                © 2025 Jeannoel Dayne Miguel. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#home" className="text-sm hover:text-accent-blue transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm hover:text-accent-blue transition-colors">
                About
              </a>
              <a href="#tech-stack" className="text-sm hover:text-accent-blue transition-colors">
                Tech Stack
              </a>
              <a href="#contact" className="text-sm hover:text-accent-blue transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
