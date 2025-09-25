import React, { useState, useEffect, useMemo } from 'react';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Summit Automation',
      description: 'AI-powered business automation platform. CRM automation, invoice processing, and expense tracking for small businesses.',
      technologies: ['Python', 'JavaScript', 'AWS', 'Docker', 'AI/ML'],
      demo: 'https://summitautomation.io',
      github: '#',
      year: '2025',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Romeo Forestry',
      description: 'Professional website for forestry services company serving multiple states. Responsive design and modern UI.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://romeoforestry.com',
      github: '#',
      year: '2024',
      status: 'Live'
    },
    {
      id: 3,
      title: 'CodeCracker',
      description: 'Python-based cybersecurity tool for educational purposes. Cryptographic techniques and security analysis.',
      technologies: ['Python', 'Cryptography'],
      demo: '#',
      github: 'https://github.com/Brandon-Allshouse/CodeCracker',
      year: '2024',
      status: 'Open Source'
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      description: 'Modern portfolio website with dark theme and smooth animations. Built with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      demo: 'https://brandonallshouse.dev',
      github: 'https://github.com/Brandon-Allshouse/Personal-Portfolio',
      year: '2025',
      status: 'Live'
    }
  ], []);

  useEffect(() => {
    const timer = setTimeout(() => {
      projects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProjects(prev => [...prev, index]);
        }, index * 150);
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [projects]);

  const getStatusColor = (status) => {
    const colors = {
      'Live': 'bg-green-500',
      'Open Source': 'bg-primary-500',
      'In Progress': 'bg-yellow-500'
    };
    return colors[status] || 'bg-gray-500';
  };

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-400">
            Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of things I&apos;ve built. From automation platforms to security tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card transition-all duration-500 ${
                visibleProjects.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-gray-400 text-sm">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-700/50 text-primary-300 rounded-full border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              <div className="flex gap-4">
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 inline-flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    View Live
                  </a>
                )}

                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.demo !== '#' ? 'btn-outline' : 'btn-primary'} flex-1 inline-flex items-center justify-center`}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {project.demo !== '#' ? 'Code' : 'View Code'}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;