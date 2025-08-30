import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    { value: '2+', label: 'Years Experience', icon: Calendar },
    { value: '6+', label: 'Projects Completed', icon: Award },
    { value: '3', label: 'Certifications', icon: GraduationCap },
    { value: '1', label: 'Location', icon: MapPin }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Electronics Engineering',
      institution: 'Mariano Marcos State University',
      period: '2020 - 2024',
      type: 'University'
    },
    {
      degree: 'STEM Strand',
      institution: 'Ilocos Norte National High School',
      period: '2018 - 2020',
      type: 'High School'
    }
  ];

  const certifications = [
    'Electronics Engineer & Technician Licensure – PRC, June 2025',
    'Associate Data Engineer in Snowflake – DataCamp, July 2025',
    'Associate Data Engineer in SQL – DataCamp, August 2025'
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Section-specific electronic elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Grid pattern */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1">
            {Array(36).fill(0).map((_, i) => (
              <div key={i} className="border border-accent-yellow/10 rounded-sm"></div>
            ))}
          </div>
          
          {/* Circuit nodes */}
          <div className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full bg-accent-yellow/20 animate-pulse"></div>
          <div className="absolute top-2/3 left-2/3 w-3 h-3 rounded-full bg-accent-yellow/20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent-yellow mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated Electronics Engineer with a passion for innovative technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card className="bg-card/30 backdrop-blur-glass shadow-medium hover:shadow-strong transition-all duration-300 p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a dedicated Electronics Engineer with a passion for innovative technology solutions. 
                  My expertise spans from IoT systems and data analytics to ICT infrastructure development. 
                  I enjoy solving complex technical challenges and creating systems that make a real-world impact.
                </p>
                <p>
                  My journey combines strong technical foundations with practical experience, always focusing 
                  on creating solutions that bridge the gap between hardware and software to solve real-world problems.
                </p>
              </div>
            </Card>

            {/* Education */}
            <Card className="bg-card/30 backdrop-blur-glass shadow-medium hover:shadow-strong transition-all duration-300 p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.degree} className="flex items-start gap-4 pb-6 last:pb-0">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 backdrop-blur-sm shadow-medium">
                      <GraduationCap size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <span className="text-sm text-muted-foreground font-mono">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Certifications */}
            <Card className="bg-card/30 backdrop-blur-glass shadow-medium hover:shadow-strong transition-all duration-300 p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center mt-0.5 shadow-medium">
                      {cert.includes('DataCamp') ? (
                        <svg 
                          viewBox="0 0 32 32" 
                          className="w-3.5 h-3.5 text-primary"
                          fill="currentColor"
                        >
                          <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm-3.9 21.2c-.3.3-.7.4-1.1.4-.4 0-.8-.1-1.1-.4l-4.6-4.6c-.3-.3-.4-.7-.4-1.1 0-.4.1-.8.4-1.1l5.7-5.7c.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4l1.5 1.5c.6.6.6 1.5 0 2.1l-3.7 3.7 2.2 2.2c.3.3.4.7.4 1.1 0 .4-.1.8-.4 1.1zm11.6-5.7c0 .4-.1.8-.4 1.1l-5.7 5.7c-.3.3-.7.4-1.1.4-.4 0-.8-.1-1.1-.4l-1.5-1.5c-.6-.6-.6-1.5 0-2.1l3.7-3.7-2.2-2.2c-.6-.6-.6-1.5 0-2.1l1.5-1.5c.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4l4.6 4.6c.3.3.4.7.4 1.1z" />
                        </svg>
                      ) : (
                        <Award size={14} className="text-primary" />
                      )}
                    </div>
                    <p className="text-muted-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="bg-card-glass/60 backdrop-blur-glass p-6 rounded-2xl shadow-medium border border-accent-yellow/20 hover:border-accent-yellow/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-medium">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Location Card */}
            <Card className="bg-card-glass/60 backdrop-blur-glass p-6 text-primary shadow-medium rounded-2xl border border-accent-yellow/20 hover:border-accent-yellow/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <MapPin size={24} className="text-primary" />
                <h4 className="text-xl font-semibold">Location</h4>
              </div>
              <div className="space-y-1 mb-6">
                <p className="text-base">Vintar, Ilocos Norte</p>
                <p className="text-base">Philippines 2915</p>
              </div>
              <div className="pt-4 border-t border-accent-yellow/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse" />
                  <p className="text-sm text-muted-foreground">Available for remote work and local opportunities</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;