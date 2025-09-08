import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);

  const projects = [
    {
      id: 1,
      title: 'Summit Automation',
      category: 'fullstack',
      type: 'business',
      description: 'AI-powered business automation platform serving Pittsburgh area businesses. Features CRM automation, intelligent invoice processing, expense tracking, and real-time analytics. Saves businesses 20+ hours per week on administrative tasks.',
      technologies: ['Python', 'JavaScript', 'AWS', 'Docker', 'AI/ML', 'React', 'Node.js'],
      github: '#',
      demo: 'https://summitautomation.io',
      featured: true,
      status: 'Live',
      year: '2025',
      metrics: {
        users: '2-10 employees',
        impact: '20+ hours saved/week',
        location: 'New Castle, PA'
      },
      features: [
        'Real-time business dashboard',
        'AI receipt and expense management', 
        'Smart lead tracking',
        'Automated follow-up reminders',
        'Multi-user team collaboration'
      ]
    },
    {
      id: 2,
      title: 'Romeo Forestry',
      category: 'frontend',
      type: 'business',
      description: 'Professional website for forestry services company serving Western Pennsylvania, Eastern Ohio, Southern New York, and Northern West Virginia. Features responsive design showcasing sustainable harvesting and land management services.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: '#',
      demo: 'https://romeoforestry.com',
      featured: true,
      status: 'Live',
      year: '2024',
      metrics: {
        coverage: '4 States',
        services: 'Timber & Land Management',
        focus: 'Sustainable Harvesting'
      },
      features: [
        'Responsive web design',
        'Professional branding',
        'Service inquiry system',
        'Geographic coverage display',
        'Mobile optimization'
      ]
    },
    {
      id: 3,
      title: 'CodeCracker',
      category: 'security',
      type: 'academic',
      description: 'Python-based cybersecurity tool for educational purposes. Demonstrates various cryptographic techniques and security analysis methods as part of cybersecurity coursework.',
      technologies: ['Python', 'Cryptography', 'Security Analysis'],
      github: 'https://github.com/Brandon-Allshouse/CodeCracker',
      demo: '#',
      featured: true,
      status: 'Open Source',
      year: '2024',
      metrics: {
        language: 'Python',
        purpose: 'Educational',
        focus: 'Cryptography'
      },
      features: [
        'Cryptographic analysis',
        'Educational security tools',
        'Python implementation',
        'Open source project',
        'Academic coursework'
      ]
    },
    {
      id: 4,
      title: 'Cybr301Final',
      category: 'security',
      type: 'academic', 
      description: 'Final project for Cybersecurity course demonstrating web security concepts, vulnerability assessment, and security best practices implementation.',
      technologies: ['HTML', 'Cybersecurity', 'Web Security'],
      github: 'https://github.com/Brandon-Allshouse/Cybr301Final',
      demo: '#',
      featured: false,
      status: 'Academic',
      year: '2024',
      metrics: {
        course: 'CYBR 301',
        focus: 'Web Security',
        type: 'Final Project'
      },
      features: [
        'Web security demonstration',
        'Vulnerability assessment',
        'Security best practices',
        'Academic project',
        'HTML implementation'
      ]
    },
    {
      id: 5,
      title: 'Slot Machine Game',
      category: 'backend',
      type: 'personal',
      description: 'Python-based slot machine game demonstrating object-oriented programming concepts, game logic implementation, and user interaction design.',
      technologies: ['Python', 'OOP', 'Game Logic'],
      github: 'https://github.com/Brandon-Allshouse/Slot-Machine',
      demo: '#',
      featured: false,
      status: 'Completed',
      year: '2024',
      metrics: {
        language: 'Python',
        type: 'Game Development',
        concept: 'OOP Practice'
      },
      features: [
        'Object-oriented design',
        'Game logic implementation',
        'User interaction system',
        'Python programming',
        'Educational project'
      ]
    },
    {
      id: 6,
      title: 'Personal Portfolio',
      category: 'fullstack',
      type: 'personal',
      description: 'Modern, responsive portfolio website built with React and Tailwind CSS. Features dark theme, smooth animations, and pearlescent design elements. Showcases projects, skills, and professional experience.',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
      github: 'https://github.com/Brandon-Allshouse/Personal-Portfolio',
      demo: 'https://brandonallshouse.dev',
      featured: true,
      status: 'Live',
      year: '2025',
      metrics: {
        framework: 'React + Vite',
        styling: 'Tailwind CSS',
        theme: 'Dark + Pearl'
      },
      features: [
        'Responsive design',
        'Dark theme with red accents',
        'Smooth animations',
        'Modern UI/UX',
        'Performance optimized'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🎯' },
    { id: 'fullstack', name: 'Full Stack', icon: '⚡' },
    { id: 'security', name: 'Security', icon: '🛡️' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    setVisibleProjects([]);
    const timer = setTimeout(() => {
      filteredProjects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProjects(prev => [...prev, index]);
        }, index * 150);
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [activeFilter, filteredProjects]);

  const getStatusColor = (status) => {
    const colors = {
      'Live': 'bg-green-500',
      'Open Source': 'bg-primary-500',
      'Academic': 'bg-accent-500',
      'Completed': 'bg-pearl-500',
      'In Progress': 'bg-yellow-500'
    };
    return colors[status] || 'bg-gray-500';
  };

  const getTypeIcon = (type) => {
    const icons = {
      'business': '🏢',
      'academic': '🎓', 
      'personal': '👨‍💻'
    };
    return icons[type] || '📁';
  };

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="pearl-text">My Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From AI-powered business automation to cybersecurity tools, here's a showcase of my work 
            across different domains. Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-glow-red'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-primary-500/30'
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              <span className="text-lg mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-500 ${
                visibleProjects.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <div className={`card h-full ${project.featured ? 'pearl-card' : ''}`}>
                <div className={project.featured ? 'pearl-card-content' : ''}>
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{getTypeIcon(project.type)}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                          <span className="text-gray-400 text-sm">{project.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    {project.featured && (
                      <div className="px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full">
                        <span className="text-xs font-bold text-white">FEATURED</span>
                      </div>
                    )}
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Project Features */}
                  {project.featured && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-start text-sm text-gray-300">
                            <span className="text-primary-400 mr-2 mt-1">▸</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold pearl-text">{value}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs bg-gray-700/50 text-primary-300 rounded-full border border-primary-500/20 hover:bg-primary-500/20 hover:border-primary-500/40 transition-colors"
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
                        className="btn-primary flex-1 text-center pearl-shimmer"
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
                        className={`${project.demo !== '#' ? 'btn-outline' : 'btn-primary'} flex-1 text-center pearl-shimmer`}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        {project.demo !== '#' ? 'Code' : 'View Code'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center">
          <div className="pearl-card max-w-2xl mx-auto">
            <div className="pearl-card-content text-center">
              <h3 className="text-2xl font-bold mb-4 pearl-text">Interested in More?</h3>
              <p className="text-gray-300 mb-6">
                These are just some highlights of my work. Check out my GitHub for more projects, 
                contributions, and ongoing experiments in cybersecurity and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/Brandon-Allshouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary pearl-shimmer"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View GitHub
                </a>
                <a
                  href="#contact"
                  className="btn-outline pearl-shimmer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Let's Collaborate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;