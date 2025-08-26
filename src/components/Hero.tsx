import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-card/30 backdrop-blur-glass border border-border/20 rounded-full text-sm font-medium text-muted-foreground">
                <span className="w-2 h-2 bg-accent-blue rounded-full mr-2 animate-pulse" />
                Available for opportunities
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                Jeannoel Dayne
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  Miguel
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Electronics Engineer
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Passionate about creating innovative solutions that bridge hardware and software. 
              Specialized in IoT systems, data engineering, and modern web technologies with 
              a focus on user-centered design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-light text-primary-foreground shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
                asChild
              >
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight size={18} />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-card/50 border-border/50 hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300"
                asChild
              >
                <a href="/resume.pdf" target="_blank" className="flex items-center gap-2">
                  <Download size={18} />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm font-medium text-muted-foreground">Connect:</span>
              <div className="flex gap-3">
                {[
                  { href: 'mailto:junnellemiguel09@gmail.com', icon: Mail, label: 'Email' },
                  { href: 'https://github.com', icon: Github, label: 'GitHub' },
                  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' }
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-3 bg-card/30 backdrop-blur-glass border border-border/20 rounded-xl hover:bg-accent-blue hover:text-white hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Circle */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-card backdrop-blur-glass border border-border/20 rounded-full flex items-center justify-center shadow-strong relative overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" 
                     style={{ 
                       animation: 'shimmer 3s ease-in-out infinite',
                     }} 
                />
                
                {/* Profile Content */}
                <div className="text-center text-primary/60">
                  <div className="text-8xl mb-4">⚡</div>
                  <p className="text-lg font-medium">Engineer</p>
                  <p className="text-sm text-muted-foreground">& Developer</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-blue/20 backdrop-blur-glass border border-accent-blue/30 rounded-2xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-2xl">⚛️</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-purple/20 backdrop-blur-glass border border-accent-purple/30 rounded-2xl flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-3xl">🚀</span>
              </div>
              
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-accent-cyan/20 backdrop-blur-glass border border-accent-cyan/30 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;