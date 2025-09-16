import { ExternalLink, Github, Zap, Database, Globe, BarChart3, Wrench, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: any;
  features: string[];
  status: string;
  gradient?: string;
  githubUrl?: string;
}

const Projects = () => {
  const projects = [
    {
      title: 'IoT Aquaculture Monitoring System',
      description: 'Advanced IoT-based monitoring and depuration system for giant freshwater prawn industry using Arduino, ESP32, and real-time data analytics.',
      technologies: ['Arduino', 'ESP32', 'C++', 'Blynk', 'IoT', 'Sensors'],
      icon: Zap,
      features: ['Real-time monitoring', 'Water quality analysis', 'Automated alerts', 'Data visualization'],
      status: 'Completed',
      githubUrl: 'https://opac.mmsu.edu.ph/cgi-bin/koha/opac-detail.pl?biblionumber=25105&shelfbrowse_itemnumber=31637'
    },
    {
      title: 'Soccer Analytics Platform',
      description: 'Comprehensive data analysis platform for sports media agency using Snowflake SQL to generate insights and performance reports.',
      technologies: ['SQL', 'Snowflake', 'Data Analysis', 'Reporting'],
      icon: BarChart3,
      gradient: 'from-accent-purple to-accent-blue',
      features: ['Player performance metrics', 'Match analysis', 'Predictive modeling', 'Interactive dashboards'],
      status: 'Completed',
    },
    {
      title: 'Electric Vehicle Analytics',
      description: 'Data engineering project analyzing EV charging patterns and usage trends to optimize charging infrastructure and user experience.',
      technologies: ['SQL', 'Python', 'Data Engineering', 'Analytics'],
      icon: Database,
      gradient: 'from-accent-cyan to-accent-purple',
      features: ['Charging pattern analysis', 'Usage optimization', 'Trend prediction', 'Infrastructure planning'],
      status: 'Completed',
    },
    {
      title: 'Digital Logbook System',
      description: 'Cloud-based digital logbook system for government operations with automated reporting, data entry, and remote access capabilities.',
      technologies: ['AppSheet', 'Google Workspace', 'Automation', 'Cloud'],
      icon: Monitor,
      gradient: 'from-accent-blue to-accent-purple',
      features: ['Digital data entry', 'Automated reporting', 'Cloud synchronization', 'Mobile access'],
      status: 'Completed',
    },
    {
      title: 'Tech Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and TypeScript, featuring glassmorphism design and smooth animations.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      icon: Globe,
      gradient: 'from-accent-purple to-accent-cyan',
      features: ['Responsive design', 'Glass effects', 'Smooth animations', 'SEO optimized'],
      status: 'Live',
      githubUrl: 'https://github.com/Mittens209/JeannoelProPortfolio'
    },
    {
      title: 'POW Cost System',
      description: 'The POW Cost System is a structured framework I developed to accurately track, allocate, and optimize project expenses, ensuring transparency and efficiency in cost management.',
      technologies: ['Typescript', 'Tailwind', 'Electro', 'Vite', 'React'],
      icon: Wrench,
      gradient: 'from-accent-cyan to-accent-blue',
      features: ['Automation', 'Data', 'Spreadsheet', 'Documentation'],
      status: 'Implemented',
      githubUrl: 'https://github.com/Mittens209/POW_Cost_System'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-transparent relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Section-specific electronic elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Horizontal circuit traces */}
          <div className="absolute top-1/4 left-0 right-0 h-px bg-accent-yellow"></div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-accent-yellow"></div>
          
          {/* Vertical circuit traces */}
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-accent-yellow"></div>
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-accent-yellow"></div>
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
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
              className="group bg-card/30 backdrop-blur-glass hover:bg-card/50 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8 relative">
                {/* Project Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' || project.status === 'In Production' || project.status === 'Implemented'
                      ? 'bg-accent-blue text-accent-light shadow-soft'
                      : 'bg-panel-bg text-foreground shadow-soft'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-medium group-hover:bg-primary/20">
                  <project.icon className="w-8 h-8 text-primary" />
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
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-75" />
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full bg-panel-bg shadow-soft hover:bg-accent-blue hover:text-accent-light transition-all duration-300"
                      >
                        <ExternalLink size={14} className="mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#1C1C1C]/95 backdrop-blur-xl border border-[#FFC300]/20 shadow-2xl">
                      <DialogHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center shadow-medium">
                            <project.icon className="w-6 h-6 text-primary" />
                          </div>
                          <DialogTitle className="text-2xl font-semibold text-primary">
                            {project.title}
                          </DialogTitle>
                        </div>
                        <DialogDescription className="text-muted-foreground">
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                      
                      {/* Detailed Content */}
                      <div className="mt-6 space-y-6">
                        {/* Technologies Section */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 bg-white/5 text-white/90 rounded-lg text-sm font-medium border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Features Section */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary">Key Features</h4>
                          <ul className="grid gap-2 text-muted-foreground">
                            {project.features.map((feature) => (
                              <li key={feature} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-[#FFC300] rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Project Status */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary">Project Status</h4>
                          <div className="flex items-center">
                            <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                              project.status === 'Live' || project.status === 'In Production' || project.status === 'Implemented'
                                ? 'bg-accent-blue/20 text-accent-blue'
                                : 'bg-white/5 text-white/90'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </div>

                        {/* GitHub Link */}
                        {project.githubUrl && (
                          <div className="space-y-3">
                            <h4 className="font-semibold text-primary">Project Code</h4>
                            <Button
                              variant="outline"
                              className="bg-white/5 hover:bg-accent-blue hover:text-accent-light transition-all duration-300"
                              onClick={() => window.open(project.githubUrl, '_blank')}
                            >
                              <Github className="mr-2 h-4 w-4" />
                              View Project
                            </Button>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card/30 backdrop-blur-glass shadow-medium hover:shadow-strong transition-all duration-300 rounded-2xl p-8 max-w-2xl mx-auto">
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