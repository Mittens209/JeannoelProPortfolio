import { ExternalLink, Github, Zap, Database, Globe, BarChart3, Wrench, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'IoT Aquaculture Monitoring System',
      description: 'Advanced IoT-based monitoring and depuration system for giant freshwater prawn industry using Arduino, ESP32, and real-time data analytics.',
      technologies: ['Arduino', 'ESP32', 'C++', 'Blynk', 'IoT', 'Sensors'],
      icon: Zap,
      gradient: 'from-accent-blue to-accent-cyan',
      features: ['Real-time monitoring', 'Water quality analysis', 'Automated alerts', 'Data visualization'],
      status: 'Completed'
    },
    {
      title: 'Soccer Analytics Platform',
      description: 'Comprehensive data analysis platform for sports media agency using Snowflake SQL to generate insights and performance reports.',
      technologies: ['SQL', 'Snowflake', 'Data Analysis', 'Reporting'],
      icon: BarChart3,
      gradient: 'from-accent-purple to-accent-blue',
      features: ['Player performance metrics', 'Match analysis', 'Predictive modeling', 'Interactive dashboards'],
      status: 'Completed'
    },
    {
      title: 'Electric Vehicle Analytics',
      description: 'Data engineering project analyzing EV charging patterns and usage trends to optimize charging infrastructure and user experience.',
      technologies: ['SQL', 'Python', 'Data Engineering', 'Analytics'],
      icon: Database,
      gradient: 'from-accent-cyan to-accent-purple',
      features: ['Charging pattern analysis', 'Usage optimization', 'Trend prediction', 'Infrastructure planning'],
      status: 'Completed'
    },
    {
      title: 'Digital Logbook System',
      description: 'Cloud-based digital logbook system for government operations with automated reporting, data entry, and remote access capabilities.',
      technologies: ['AppSheet', 'Google Workspace', 'Automation', 'Cloud'],
      icon: Monitor,
      gradient: 'from-accent-blue to-accent-purple',
      features: ['Digital data entry', 'Automated reporting', 'Cloud synchronization', 'Mobile access'],
      status: 'In Production'
    },
    {
      title: 'Tech Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and TypeScript, featuring glassmorphism design and smooth animations.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      icon: Globe,
      gradient: 'from-accent-purple to-accent-cyan',
      features: ['Responsive design', 'Glass effects', 'Smooth animations', 'SEO optimized'],
      status: 'Live'
    },
    {
      title: 'Network Infrastructure Design',
      description: 'Complete ICT infrastructure design including CCTV systems, FDAS, and Wi-Fi networks for local government implementation.',
      technologies: ['Network Design', 'CCTV', 'Infrastructure', 'Planning'],
      icon: Wrench,
      gradient: 'from-accent-cyan to-accent-blue',
      features: ['Network topology', 'Security systems', 'Wi-Fi coverage', 'Documentation'],
      status: 'Implemented'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning IoT systems, data engineering, 
            and modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-card/30 backdrop-blur-glass border-border/20 hover:bg-card/50 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8 relative">
                {/* Project Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' || project.status === 'In Production' || project.status === 'Implemented'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-accent-blue/20 text-accent-blue border border-accent-blue/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary text-sm">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-lg text-xs font-medium hover:bg-accent-blue hover:text-white transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-6">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-card/50 border-border/50 hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    View Details
                  </Button>
                  {project.title !== 'Network Infrastructure Design' && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="px-3 hover:bg-accent-purple/20 hover:text-accent-purple transition-all duration-300"
                    >
                      <Github size={16} />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card/30 backdrop-blur-glass border border-border/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and innovative projects.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground shadow-medium hover:shadow-strong transition-all duration-300"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;