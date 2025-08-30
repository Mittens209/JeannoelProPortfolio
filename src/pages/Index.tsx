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
      <footer className="bg-card/30 backdrop-blur-glass shadow-medium py-6">
        <div className="container mx-auto px-6">
          <p className="text-sm text-center text-muted-foreground">
            © 2025 Jeannoel Dayne Miguel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
