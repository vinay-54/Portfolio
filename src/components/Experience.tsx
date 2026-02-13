
import { Calendar, Users, Trophy, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Development Intern',
company: 'SpyTech & AICTE',
period: 'May 2025 - Jul 2025',
description: 'Completed a full stack development internship focusing on building scalable web applications and strengthening problem-solving skills.',
achievements: [
  'Developed and deployed full-stack applications using modern web technologies',
  'Strengthened skills in API integration, authentication, and responsive design',
  'Improved debugging efficiency and project consistency through disciplined coding practices',
  'Collaborated in team sessions, gaining exposure to real-world development workflows'
],
iconImage: 'spytech.png',
color: 'bg-green-500/10 text-green-600'
    },
    {
  title: 'Artificial Intelligence & Data Analytics Intern',
  company: 'AICTE, Shell India Markets & Edunet Foundation',
  period: 'Oct 2025 - Nov 2025',
  description: 'Completed a 4-week virtual internship focused on Artificial Intelligence and Data Analytics under the Green Skills 4Future program.',
  achievements: [
    'Worked on AI and data analytics concepts for sustainable development solutions',
    'Gained hands-on exposure to machine learning fundamentals and data-driven decision making',
    'Explored real-world applications of AI in environmental and sustainability domains',
    'Completed guided projects and technical assessments successfully'
  ],
  iconImage: 'aicte.png',
  color: 'bg-blue-500/10 text-blue-600'
},

    
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Wanna see{' '}
            <br className="hidden sm:block" />
            my experience?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From development leadership to workshop facilitation, here's my journey of building impactful solutions and leading technical initiatives.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Left side - Company info */}
                  <div className="bg-muted/20 p-8 lg:p-12">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${exp.color} mb-6`}>
                      <img 
                        src={exp.iconImage} 
                        alt={exp.company} 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                    <p className="text-lg font-semibold text-primary mb-2">{exp.title}</p>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Right side - Details */}
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg mb-4">Key Achievements:</h4>
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                Let's build something amazing together. I'm always open to discussing new opportunities and exciting projects.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

