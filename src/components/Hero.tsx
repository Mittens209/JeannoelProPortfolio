import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-solid-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Core glow elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-yellow/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-purple/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Electronic circuit board traces */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* Horizontal traces */}
          <div className="absolute top-[10%] left-0 right-0 h-[1px] bg-accent-yellow"></div>
          <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-accent-yellow"></div>
          <div className="absolute top-[50%] left-0 right-0 h-[1px] bg-accent-yellow"></div>
          <div className="absolute top-[70%] left-0 right-0 h-[1px] bg-accent-yellow"></div>
          <div className="absolute top-[90%] left-0 right-0 h-[1px] bg-accent-yellow"></div>
          
          {/* Vertical traces */}
          <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-accent-yellow"></div>
          <div className="absolute left-[30%] top-0 bottom-0 w-[1px] bg-accent-yellow"></div>
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-accent-yellow"></div>
          <div className="absolute left-[70%] top-0 bottom-0 w-[1px] bg-accent-yellow"></div>
          <div className="absolute left-[90%] top-0 bottom-0 w-[1px] bg-accent-yellow"></div>
          
          {/* Connection nodes */}
          <div className="absolute top-[10%] left-[10%] w-2 h-2 rounded-full bg-accent-yellow/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-[10%] left-[50%] w-2 h-2 rounded-full bg-accent-yellow/20 animate-pulse" style={{ animationDelay: '1.7s' }}></div>
          <div className="absolute top-[10%] left-[90%] w-2 h-2 rounded-full bg-accent-yellow/20 animate-pulse" style={{ animationDelay: '3.1s' }}></div>
          
          <div className="absolute top-[50%] left-[10%] w-2 h-2 rounded-full bg-accent-yellow/20 animate-pulse" style={{ animationDelay: '2.3s' }}></div>
          <div className="absolute top-[50%] left-[50%] w-3 h-3 rounded-full bg-accent-yellow/30 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-[50%] left-[90%] w-2 h-2 rounded-full bg-accent-yellow/20 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          
          <div className="absolute top-[90%] left-[10%] w-2 h-2 rounded-full bg-accent-yellow/20 animate-pulse" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute top-[90%] left-[50%] w-2 h-2 rounded-full bg-accent-yellow/20 animate-pulse" style={{ animationDelay: '2.8s' }}></div>
          <div className="absolute top-[90%] left-[90%] w-2 h-2 rounded-full bg-accent-yellow/20 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
        </div>
        
        {/* Microchip elements */}
        <div className="absolute top-[15%] right-[5%] w-32 h-32 border border-accent-yellow/20 rounded-md opacity-20 backdrop-blur-sm">
          <div className="absolute inset-3 grid grid-cols-4 grid-rows-4 gap-1">
            {Array(16).fill(0).map((_, i) => (
              <div key={`chip1-${i}`} className="bg-accent-yellow/10 rounded-sm"></div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-[15%] left-[5%] w-24 h-24 border border-accent-yellow/20 rounded-md opacity-20 backdrop-blur-sm">
          <div className="absolute inset-2 grid grid-cols-3 grid-rows-3 gap-1">
            {Array(9).fill(0).map((_, i) => (
              <div key={`chip2-${i}`} className="bg-accent-yellow/10 rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-accent-yellow/10 backdrop-blur-sm rounded-full text-sm font-medium text-accent-yellow shadow-soft">
                <span className="w-2 h-2 bg-accent-yellow rounded-full mr-2 animate-pulse" />
                Available for opportunities
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                Jeannoel Dayne
                <span className="block text-solid-accent">
                  Miguel
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Electronics Engineer | Tech Enthusiast | Freelancer
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
                    className="p-3 bg-secondary/20 backdrop-blur-sm rounded-xl hover:bg-secondary/30 text-accent-yellow shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image/Visual - CPU Design */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative mx-auto lg:mx-0 my-8 lg:my-0 px-8 sm:px-12 md:px-16">
              {/* CPU Chip Main Body */}
              <div className="group w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-card-glass backdrop-blur-glass rounded-lg flex items-center justify-center shadow-medium relative overflow-hidden border-2 border-accent-yellow/30 hover:border-accent-yellow/60 transition-colors duration-300">
                {/* CPU Grid Pattern */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0.5 sm:gap-1 opacity-20 pointer-events-none">
                  {Array(64).fill(0).map((_, i) => (
                    <div key={i} className="bg-accent-yellow/10 rounded-sm"></div>
                  ))}
                </div>
                
                {/* CPU Pins - Top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-3/4 h-1/8 flex justify-around">
                  {Array(10).fill(0).map((_, i) => (
                    <div key={`top-${i}`} className="w-0.5 sm:w-1 h-3 sm:h-4 bg-accent-yellow/50 rounded-b group-hover:bg-accent-yellow/80 transition-colors duration-300"></div>
                  ))}
                </div>
                
                {/* CPU Pins - Bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-3/4 h-1/8 flex justify-around">
                  {Array(10).fill(0).map((_, i) => (
                    <div key={`bottom-${i}`} className="w-0.5 sm:w-1 h-3 sm:h-4 bg-accent-yellow/50 rounded-t group-hover:bg-accent-yellow/80 transition-colors duration-300"></div>
                  ))}
                </div>
                
                {/* CPU Pins - Left */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 h-3/4 w-1/8 flex flex-col justify-around">
                  {Array(10).fill(0).map((_, i) => (
                    <div key={`left-${i}`} className="h-0.5 sm:h-1 w-3 sm:w-4 bg-accent-yellow/50 rounded-r group-hover:bg-accent-yellow/80 transition-colors duration-300"></div>
                  ))}
                </div>
                
                {/* CPU Pins - Right */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 h-3/4 w-1/8 flex flex-col justify-around">
                  {Array(10).fill(0).map((_, i) => (
                    <div key={`right-${i}`} className="h-0.5 sm:h-1 w-3 sm:w-4 bg-accent-yellow/50 rounded-l group-hover:bg-accent-yellow/80 transition-colors duration-300"></div>
                  ))}
                </div>
                
                {/* CPU Center Chip */}
                <div className="relative w-3/5 h-3/5 bg-secondary border border-accent-yellow/30 rounded-md flex items-center justify-center shadow-inner overflow-hidden group-hover:border-accent-yellow/70 transition-all duration-300">
                  {/* Circuit Traces */}
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                    <div className="absolute top-1/4 left-0 right-0 h-px bg-accent-yellow"></div>
                    <div className="absolute top-2/4 left-0 right-0 h-px bg-accent-yellow"></div>
                    <div className="absolute top-3/4 left-0 right-0 h-px bg-accent-yellow"></div>
                    <div className="absolute left-1/4 top-0 bottom-0 w-px bg-accent-yellow"></div>
                    <div className="absolute left-2/4 top-0 bottom-0 w-px bg-accent-yellow"></div>
                    <div className="absolute left-3/4 top-0 bottom-0 w-px bg-accent-yellow"></div>
                    
                    {/* Diagonal traces */}
                    <div className="absolute h-px w-1/2 bg-accent-yellow origin-bottom-left rotate-45 left-1/4 top-1/4"></div>
                    <div className="absolute h-px w-1/2 bg-accent-yellow origin-top-right -rotate-45 right-1/4 bottom-1/4"></div>
                  </div>
                  
                  {/* Electric Spark Effects - Only visible on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Horizontal sparks */}
                    <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-accent-yellow/0 group-hover:animate-[spark-horizontal_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0.1s' }}></div>
                    <div className="absolute top-2/4 left-0 right-0 h-0.5 bg-accent-yellow/0 group-hover:animate-[spark-horizontal_2.1s_ease-in-out_infinite]" style={{ animationDelay: '0.7s' }}></div>
                    <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-accent-yellow/0 group-hover:animate-[spark-horizontal_1.7s_ease-in-out_infinite]" style={{ animationDelay: '1.2s' }}></div>
                    
                    {/* Vertical sparks */}
                    <div className="absolute left-1/4 top-0 bottom-0 w-0.5 bg-accent-yellow/0 group-hover:animate-[spark-vertical_1.8s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute left-2/4 top-0 bottom-0 w-0.5 bg-accent-yellow/0 group-hover:animate-[spark-vertical_2.3s_ease-in-out_infinite]" style={{ animationDelay: '0.9s' }}></div>
                    <div className="absolute left-3/4 top-0 bottom-0 w-0.5 bg-accent-yellow/0 group-hover:animate-[spark-vertical_1.9s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}></div>
                    
                    {/* Intersection nodes */}
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent-yellow/0 group-hover:animate-[spark-node_2s_ease-in-out_infinite]" style={{ animationDelay: '0.3s', transform: 'translate(-50%, -50%)' }}></div>
                    <div className="absolute top-1/4 left-2/4 w-2 h-2 rounded-full bg-accent-yellow/0 group-hover:animate-[spark-node_1.7s_ease-in-out_infinite]" style={{ animationDelay: '1.1s', transform: 'translate(-50%, -50%)' }}></div>
                    <div className="absolute top-1/4 left-3/4 w-2 h-2 rounded-full bg-accent-yellow/0 group-hover:animate-[spark-node_2.2s_ease-in-out_infinite]" style={{ animationDelay: '0.5s', transform: 'translate(-50%, -50%)' }}></div>
                    <div className="absolute top-2/4 left-1/4 w-2 h-2 rounded-full bg-accent-yellow/0 group-hover:animate-[spark-node_1.8s_ease-in-out_infinite]" style={{ animationDelay: '0.7s', transform: 'translate(-50%, -50%)' }}></div>
                    <div className="absolute top-2/4 left-2/4 w-3 h-3 rounded-full bg-accent-yellow/0 group-hover:animate-[spark-node_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0.1s', transform: 'translate(-50%, -50%)' }}></div>
                    <div className="absolute top-2/4 left-3/4 w-2 h-2 rounded-full bg-accent-yellow/0 group-hover:animate-[spark-node_2s_ease-in-out_infinite]" style={{ animationDelay: '1.3s', transform: 'translate(-50%, -50%)' }}></div>
                    <div className="absolute top-3/4 left-1/4 w-2 h-2 rounded-full bg-accent-yellow/0 group-hover:animate-[spark-node_1.9s_ease-in-out_infinite]" style={{ animationDelay: '0.9s', transform: 'translate(-50%, -50%)' }}></div>
                    <div className="absolute top-3/4 left-2/4 w-2 h-2 rounded-full bg-accent-yellow/0 group-hover:animate-[spark-node_2.1s_ease-in-out_infinite]" style={{ animationDelay: '1.2s', transform: 'translate(-50%, -50%)' }}></div>
                    <div className="absolute top-3/4 left-3/4 w-2 h-2 rounded-full bg-accent-yellow/0 group-hover:animate-[spark-node_1.6s_ease-in-out_infinite]" style={{ animationDelay: '0.4s', transform: 'translate(-50%, -50%)' }}></div>
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-yellow/10 to-transparent -translate-x-full animate-shimmer" 
                       style={{ 
                         animation: 'shimmer 3s ease-in-out infinite',
                       }} 
                  />
                  
                  {/* Content */}
                  <div className="text-center text-accent-yellow z-10">
                    <div className="text-5xl sm:text-6xl mb-2 group-hover:animate-pulse">⚡</div>
                    <p className="text-sm sm:text-base font-medium">Engineer</p>
                    <p className="text-xs text-muted-foreground">& Developer</p>
                  </div>
                </div>
                
                {/* Corner cutouts */}
                <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 bg-background rounded-br-lg"></div>
                <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-background rounded-bl-lg"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 bg-background rounded-tr-lg"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-background rounded-tl-lg"></div>
              </div>

              {/* CPU Heat Sink Lines */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3/4 h-2 flex justify-around">
                {Array(8).fill(0).map((_, i) => (
                  <div key={`heatsink-${i}`} className="w-3 sm:w-4 h-full bg-accent-yellow/30 rounded-t"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;