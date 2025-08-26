import reactLogo from '@/assets/react-logo.png';
import typescriptLogo from '@/assets/typescript-logo.png';
import pythonLogo from '@/assets/python-logo.png';
import nodejsLogo from '@/assets/nodejs-logo.png';
import tailwindLogo from '@/assets/tailwind-logo.png';
import postgresqlLogo from '@/assets/postgresql-logo.png';

const TechStack = () => {
  const technologies = [
    {
      name: 'React',
      logo: reactLogo,
      description: 'Frontend Library',
      category: 'Frontend'
    },
    {
      name: 'TypeScript',
      logo: typescriptLogo,
      description: 'Type Safety',
      category: 'Language'
    },
    {
      name: 'Python',
      logo: pythonLogo,
      description: 'Backend & AI',
      category: 'Language'
    },
    {
      name: 'Node.js',
      logo: nodejsLogo,
      description: 'Runtime Environment',
      category: 'Backend'
    },
    {
      name: 'Tailwind CSS',
      logo: tailwindLogo,
      description: 'Styling Framework',
      category: 'Frontend'
    },
    {
      name: 'PostgreSQL',
      logo: postgresqlLogo,
      description: 'Database',
      category: 'Database'
    }
  ];

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['Python', 'C++', 'SQL', 'HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Django']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'PostgreSQL', 'MatLab', 'Snowflake', 'Cisco']
    },
    {
      title: 'Specializations',
      skills: ['IoT Systems', 'Data Engineering', 'Web Development', 'API Design', 'Electronics Design']
    }
  ];

  return (
    <section id="tech-stack" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern technologies I use to build exceptional digital experiences and robust systems
          </p>
        </div>

        {/* Tech Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-card/30 backdrop-blur-glass border border-border/20 rounded-2xl p-6 hover:bg-card/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500" />
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                    />
                  </div>
                  
                  <h3 className="font-semibold text-primary mb-1">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{tech.description}</p>
                  <span className="inline-block px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-xs font-medium">
                    {tech.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-card/30 backdrop-blur-glass border border-border/20 rounded-2xl p-8 hover:bg-card/50 transition-all duration-300 hover:shadow-medium"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-xl text-sm font-medium hover:bg-accent-blue hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;