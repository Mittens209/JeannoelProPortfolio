import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-solid-hero relative overflow-hidden">
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
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 backdrop-blur-sm rounded-full text-sm font-medium text-emerald-400 shadow-soft">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
                Available for opportunities
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                Jeannoel Dayne
                <span className="block text-solid-accent">
                  Miguel
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Electronics Engineer/IT Practitioner
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
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm font-medium text-muted-foreground">Connect:</span>
              <div className="flex gap-3">
                {[
                  { href: 'mailto:junnellemiguel09@gmail.com', icon: Mail, label: 'Email' },
                  { href: 'https://github.com/Mittens209', icon: Github, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/jeannoel-dayne-miguel-982931366/', icon: Linkedin, label: 'LinkedIn' },
                  { 
                    href: 'https://www.datacamp.com/portfolio/jeannoeldayne', 
                    label: 'DataCamp',
                    icon: () => (
                      <svg 
                        viewBox="0 0 32 32" 
                        className="w-5 h-5"
                        fill="currentColor"
                      >
                        <path d="M18.033 12.819l5.006-5.836c.136-.158.042-.397-.173-.397h-4.008c-.096 0-.187.044-.245.118L13.606 12.8a.277.277 0 0 0 0 .368l5.007 5.915c.058.074.15.118.245.118h4.008c.215 0 .309-.239.173-.397l-5.006-5.836a.139.139 0 0 1 0-.15zM8.964 12.819l5.006-5.836c.136-.158.042-.397-.173-.397H9.789a.277.277 0 0 0-.245.118l-5.007 5.915a.277.277 0 0 0 0 .368l5.007 5.915c.058.074.15.118.245.118h4.008c.215 0 .309-.239.173-.397l-5.006-5.836a.139.139 0 0 1 0-.15z" />
                      </svg>
                    )
                  }
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-3 bg-primary/10 backdrop-blur-sm rounded-xl hover:bg-primary/20 text-primary shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
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
              <div className="w-80 h-80 md:w-96 md:h-96 bg-card-glass backdrop-blur-glass rounded-full flex items-center justify-center shadow-medium relative overflow-hidden">
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
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-panel-bg backdrop-blur-glass rounded-2xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-300 shadow-soft">
                <span className="text-2xl">⚛️</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-panel-bg backdrop-blur-glass rounded-2xl flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform duration-300 shadow-soft">
                <span className="text-3xl">🚀</span>
              </div>
              
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-panel-bg backdrop-blur-glass rounded-full flex items-center justify-center animate-bounce shadow-soft">
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