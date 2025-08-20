
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Speed Typing Test',
category: 'Web App',
description: 'An interactive typing challenge that measures accuracy and speed using random quotes, with real-time feedback and a modern glassmorphism UI.',
tech: ['HTML', 'CSS', 'JavaScript', 'Random Quote API'],
features: [
  'Dynamic random quote generation via API',
  'Live timer ⏱ for tracking typing speed',
  'Instant feedback with success & error animations',
  'Modern glassmorphism UI with gradient backgrounds',
  'Responsive design for all devices'
],
link: 'https://typing-speed-testing-gules.vercel.app/'

    },
    {
      title: 'Wikipedia Clone',
category: 'Web App',
description: 'A simplified clone of Wikipedia with smooth search functionality, clean layout, and responsive design, built to practice API integration and front-end structuring.',
tech: ['HTML', 'CSS', 'JavaScript', 'Wikipedia API'],
features: [
  'Search powered by Wikipedia API',
  'Clean and familiar Wikipedia-inspired UI',
  'Responsive design for desktop and mobile',
  'Fast and smooth search experience',
  'Lightweight and user-friendly structure'
],
link: 'https://wikipediaclone-nine.vercel.app/'
    },
    {
      title: 'Responsive Skating Website',
category: 'Web App',
description: 'A fully responsive static website built using HTML, CSS, and Bootstrap, designed with a mobile-first approach and optimized for all screen sizes.',
tech: ['HTML', 'CSS', 'Bootstrap'],
features: [
  'Home, Skating, About, and Contact Us sections',
  'Mobile-first responsive design, scaling seamlessly across devices',
  'Clean layout and well-aligned content for better user experience',
  'Hands-on practice with CSS positioning, Bootstrap grids, and media queries'
],
link: 'https://skating-school-one.vercel.app/'
    }
  ];

  const minorProjects = [
    {
      title: 'Tourism',
      tech: [ 'HTML', 'CSS'],
      description: 'Classic game with AI opponent',
      github: 'https://github.com/vinay-54/Tourism-'
    },
    {
      title: 'Chat Page',
      tech: ['HTML', 'CSS3'],
      description: 'Interactive game with animations',
      github: 'https://github.com/vinay-54/Chat-page-layout'

    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Here are some of my recent web and app projects, highlighting my skills in Full-Stack Development, responsive web design, API integration, and interactive UI/UX.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Category badge */}
                  <div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-muted px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button - only for SastraNet */}
                  {project.link && (
                    <div>
                      <Button asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Project
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Minor Projects */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {minorProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-muted/50 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="p-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
