import { GraduationCap, Award, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Electronics Engineering',
      institution: 'Mariano Marcos State University',
      period: '2020 - 2024',
      type: 'University'
    }
  ];

  const certifications = [
    {
      title: 'Electronics Engineer & Technician Licensure',
      issuer: 'Professional Regulation Commission (PRC)',
      date: 'June 2025',
      description: 'Professional license for practicing Electronics Engineering in the Philippines. Passed both Electronics Engineer and Electronics Technician board examinations.',
      skills: ['Circuit Analysis', 'Electronics Systems', 'Communications', 'Control Systems'],
      credential: 'License No: *******',
      credentialUrl: 'https://www.prcboard.com/ece-results-april-2025-electronics-engineering-licensure-exam-list-of-passers',
      type: 'professional'
    },
    {
      title: 'Associate Data Engineer in Snowflake',
      issuer: 'DataCamp',
      date: 'July 2025',
      description: 'Comprehensive certification covering Snowflake architecture, data warehousing, and ETL processes. Completed hands-on projects and assessments.',
      skills: ['Data Warehousing', 'ETL', 'SQL', 'Data Modeling'],
      credential: 'Credential ID: ********',
      credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/ca8eb12f472e8b8a6f91b4d2a8e6ba7893d3286d',
      type: 'datacamp'
    },
    {
      title: 'Associate Data Engineer',
      issuer: 'DataCamp',
      date: 'August 2025',
      description: 'Advanced SQL certification focusing on data manipulation, querying, and database optimization. Includes practical experience with real-world datasets.',
      skills: ['SQL', 'Database Design', 'Query Optimization', 'Data Analysis'],
      credential: 'Credential ID: ********',
      credentialUrl: 'https://www.datacamp.com/profile/verify',
      type: 'datacamp'
    }
    ,
    {
      title: 'Associate Data Analyst',
      issuer: 'DataCamp',
      date: 'August 2025',
      description: 'Advanced SQL certification focusing on data manipulation, querying, and database optimization. Includes practical experience with real-world datasets.',
      skills: ['SQL', 'Database Design', 'Query Optimization', 'Data Analysis'],
      credential: 'Credential ID: ********',
      credentialUrl: 'https://www.datacamp.com/profile/verify',
      type: 'datacamp'
    }
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

        <div className="max-w-4xl mx-auto space-y-8">
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
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <Card className="bg-card-glass/60 backdrop-blur-glass p-6 hover:bg-card/50 transition-all duration-300 cursor-pointer border border-accent-yellow/20 hover:border-accent-yellow/30">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center shadow-medium">
                            {cert.type === 'datacamp' ? (
                              <svg 
                                viewBox="0 0 32 32" 
                                className="w-5 h-5 text-primary"
                                fill="currentColor"
                              >
                                <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm-3.9 21.2c-.3.3-.7.4-1.1.4-.4 0-.8-.1-1.1-.4l-4.6-4.6c-.3-.3-.4-.7-.4-1.1 0-.4.1-.8.4-1.1l5.7-5.7c.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4l1.5 1.5c.6.6.6 1.5 0 2.1l-3.7 3.7 2.2 2.2c.3.3.4.7.4 1.1 0 .4-.1.8-.4 1.1zm11.6-5.7c0 .4-.1.8-.4 1.1l-5.7 5.7c-.3.3-.7.4-1.1.4-.4 0-.8-.1-1.1-.4l-1.5-1.5c-.6-.6-.6-1.5 0-2.1l3.7-3.7-2.2-2.2c-.6-.6-.6-1.5 0-2.1l1.5-1.5c.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4l4.6 4.6c.3.3.4.7.4 1.1z" />
                              </svg>
                            ) : (
                              <Award className="w-5 h-5 text-primary" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-primary font-medium truncate">{cert.title}</h4>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                            <p className="text-xs text-muted-foreground mt-2">{cert.date}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </Card>
                    </DialogTrigger>
                    
                    <DialogContent className="bg-[#1C1C1C]/95 backdrop-blur-xl border border-[#FFC300]/20 shadow-2xl">
                      <DialogHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center shadow-medium">
                            {cert.type === 'datacamp' ? (
                              <svg 
                                viewBox="0 0 32 32" 
                                className="w-6 h-6 text-primary"
                                fill="currentColor"
                              >
                                <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm-3.9 21.2c-.3.3-.7.4-1.1.4-.4 0-.8-.1-1.1-.4l-4.6-4.6c-.3-.3-.4-.7-.4-1.1 0-.4.1-.8.4-1.1l5.7-5.7c.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4l1.5 1.5c.6.6.6 1.5 0 2.1l-3.7 3.7 2.2 2.2c.3.3.4.7.4 1.1 0 .4-.1.8-.4 1.1zm11.6-5.7c0 .4-.1.8-.4 1.1l-5.7 5.7c-.3.3-.7.4-1.1.4-.4 0-.8-.1-1.1-.4l-1.5-1.5c-.6-.6-.6-1.5 0-2.1l3.7-3.7-2.2-2.2c-.6-.6-.6-1.5 0-2.1l1.5-1.5c.3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4l4.6 4.6c.3.3.4.7.4 1.1z" />
                              </svg>
                            ) : (
                              <Award className="w-6 h-6 text-primary" />
                            )}
                          </div>
                          <div>
                            <DialogTitle className="text-xl font-semibold text-primary">
                              {cert.title}
                            </DialogTitle>
                            <DialogDescription>
                              {cert.issuer} • {cert.date}
                            </DialogDescription>
                          </div>
                        </div>
                      </DialogHeader>
                      
                      <div className="mt-6 space-y-6">
                        {/* Description */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-primary">Description</h4>
                          <p className="text-muted-foreground">{cert.description}</p>
                        </div>

                        {/* Skills */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary">Skills Covered</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-white/5 text-white/90 rounded-lg text-sm border border-white/10"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Credential ID */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-primary">Credential</h4>
                          <div className="flex items-center justify-between">
                            <p className="text-muted-foreground font-mono text-sm">{cert.credential}</p>
                            {cert.credentialUrl && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="ml-4"
                                onClick={() => window.open(cert.credentialUrl, '_blank')}
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Verify Credential
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </Card>
            
            {/* Location Card */}
            <Card className="bg-card-glass/60 backdrop-blur-glass p-6 text-primary shadow-medium rounded-2xl border border-accent-yellow/20 hover:border-accent-yellow/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <MapPin size={24} className="text-primary" />
                <h4 className="text-xl font-semibold">Location</h4>
              </div>
              <div className="space-y-1 mb-6">
                <p className="text-base text-center">Vintar, Ilocos Norte</p>
                <p className="text-base text-center">Philippines 2915</p>
              </div>
              <div className="pt-4 border-t border-accent-yellow/10">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse" />
                  <p className="text-sm text-muted-foreground">Available for remote work and local opportunities</p>
                </div>
              </div>
            </Card>
          </div>
      </div>
    </section>
  );
};

export default About;