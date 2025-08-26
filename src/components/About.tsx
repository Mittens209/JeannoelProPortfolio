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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
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
            <Card className="bg-card/30 backdrop-blur-glass border-border/20 p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a dedicated Electronics Engineer with a passion for innovative technology solutions. 
                  My expertise spans from IoT systems and data analytics to ICT infrastructure development. 
                  I enjoy solving complex technical challenges and creating systems that make a real-world impact.
                </p>
                <p>
                  Currently working as part of the Government Internship Program at the Municipal Engineering 
                  Office, where I assist in designing and implementing local ICT infrastructure projects, 
                  develop digital systems, and provide technical support for various community initiatives.
                </p>
                <p>
                  My journey combines strong technical foundations with practical experience, always focusing 
                  on creating solutions that bridge the gap between hardware and software to solve real-world problems.
                </p>
              </div>
            </Card>

            {/* Education */}
            <Card className="bg-card/30 backdrop-blur-glass border-border/20 p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.degree} className="flex items-start gap-4 pb-6 border-b border-border/20 last:border-0 last:pb-0">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      edu.type === 'University' ? 'bg-accent-blue/20 text-accent-blue' : 'bg-accent-purple/20 text-accent-purple'
                    }`}>
                      <GraduationCap size={20} />
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
            <Card className="bg-card/30 backdrop-blur-glass border-border/20 p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-cyan/20 flex items-center justify-center mt-0.5">
                      <Award size={12} className="text-accent-cyan" />
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
                className="bg-card/30 backdrop-blur-glass border-border/20 p-6 hover:bg-card/50 hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Location Card */}
            <Card className="bg-gradient-accent p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} />
                <h4 className="font-semibold">Location</h4>
              </div>
              <p className="text-sm opacity-90">Vintar, Ilocos Norte</p>
              <p className="text-sm opacity-90">Philippines 2915</p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-xs opacity-75">Available for remote work and local opportunities</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;