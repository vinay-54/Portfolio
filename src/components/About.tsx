
import { User, GraduationCap, Award, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const technicalSkills = [
    'Full Stack Development', 'Numpy', 'Matplotlib', 'Pandas', 'Python', 'C', 'C++', 
    , 'JavaScript', 'SQL', 'React.js', 'React Native', 'Node.js', 'Power Bi'
    , 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Git', 'GitHub'
  ];

  const softSkills = [
    'Public Speaking',
    'Critical Thinking',
    'Event Management',
    'Team Leadership',
    'Problem Solving',
    'Communication',
  ];

  const education = [
    {
      institution: 'SV College of Engineering',
      degree: 'B.Tech in Artificial Intelligence & Machine Learning',
      year: 'Currently in 3rd Year',
      grade: 'CGPA: 9.19',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      institution: 'Jawahar Navodaya Vidyalaya(CBSE)',
      degree: 'Intermediate',
      year: 'Completed',
      grade: '75%',
      icon: <Award className="w-6 h-6" />
    },
    {
      institution: 'Jawahar Navodaya Vidyalaya(CBSE)',
      degree: 'High School',
      year: 'Completed',
      grade: '83%',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const achievements = [
    {
      value: 'SIH 2024',
      label: 'Finalist',
      icon: <Award className="w-5 h-5 text-primary" />,
    },
    {
      value: 'Top 5',
      label: 'In College',
      icon: <Code className="w-5 h-5 text-primary" />,
    },
    {
      value: '10+',
      label: 'Certifications & awards',
      icon: <Award className="w-5 h-5 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          I am a 3rd-year Computer Science student with a strong interest in Full Stack Development and a growing passion for Machine Learning.
           My focus is on building scalable, user-friendly applications while exploring data-driven technologies that can solve real-world challenges. I enjoy learning new tools, experimenting with ideas, and applying theoretical concepts to practical projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Personal Info */}
          <div className="space-y-6 lg:space-y-8">
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Personal Info</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base sm:text-lg leading-relaxed">
                  Although I don’t have formal industry experience yet, I have been actively working on academic and personal projects that strengthen my technical foundation.
                   I aim to bridge my knowledge of web technologies and machine learning to create impactful solutions.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                  I’m highly motivated, adaptable, and eager to collaborate with peers and mentors to enhance both my technical and problem-solving skills.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {technicalSkills.map((skill) => (
                    <div key={skill} className="bg-muted/50 rounded-lg px-3 py-2 text-center font-medium text-xs sm:text-sm hover:bg-primary/10 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills and Education */}
          <div className="space-y-6 lg:space-y-8">
            {/* Soft Skills */}
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill) => (
                    <div key={skill} className="bg-muted/50 rounded-lg px-4 py-3 text-center font-medium text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        {edu.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-sm sm:text-base">{edu.institution}</h4>
                        <p className="text-muted-foreground text-sm">{edu.degree}</p>
                        <div className="flex flex-col sm:flex-row sm:space-x-4 text-xs sm:text-sm">
                          <span className="text-primary font-medium">{edu.year}</span>
                          <span className="text-muted-foreground">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="p-4 sm:p-6">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Achievements</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map((item) => (
                    <Card key={item.label} className="p-4 sm:p-6 text-center">
                      <CardContent className="p-0">
                        <div className="flex items-center justify-center mb-2">
                          {item.icon}
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{item.value}</div>
                        <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
