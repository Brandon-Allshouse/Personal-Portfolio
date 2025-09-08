import React, { useState, useEffect } from 'react';

const About = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  const skills = [
    { name: 'JavaScript', level: 92, category: 'frontend', icon: '⚡' }, // 3 repos - highest usage
    { name: 'TypeScript', level: 90, category: 'frontend', icon: '🔷' }, // 3 repos - highest usage
    { name: 'Python', level: 85, category: 'backend', icon: '🐍' }, // 2 repos - solid usage
    { name: 'React', level: 88, category: 'frontend', icon: '⚛️' }, // Used in portfolio
    { name: 'HTML/CSS', level: 82, category: 'frontend', icon: '🎨' }, // 1 repo + web dev
    { name: 'Node.js', level: 80, category: 'backend', icon: '🟢' }, // Backend JS work
    { name: 'Linux', level: 88, category: 'security', icon: '🐧' }, // Cybersecurity focus
    { name: 'Bash', level: 85, category: 'security', icon: '💻' }, // Shown in GitHub
    { name: 'Docker', level: 75, category: 'cloud', icon: '🐳' }, // Summit Automation
    { name: 'AWS', level: 72, category: 'cloud', icon: '☁️' }, // Summit Automation
    { name: 'Cybersecurity', level: 90, category: 'security', icon: '🛡️' }, // Primary focus
    { name: 'Ethical Hacking', level: 85, category: 'security', icon: '🎯' } // Academic focus
  ];

  const experiences = [
    {
      title: 'Co-Founder & CTO',
      company: 'Summit Automation',
      location: 'New Castle, Pennsylvania',
      period: '2025 - Present',
      description: 'Leading the technical development of AI-powered business automation platform. Built CRM automation, invoice processing, and expense tracking systems that save businesses 20+ hours per week.',
      technologies: ['Python', 'JavaScript', 'AWS', 'Docker', 'AI/ML'],
      achievements: [
        'Founded AI automation platform serving Pittsburgh area businesses',
        'Developed intelligent receipt and expense management system',
        'Built real-time business analytics dashboard',
        'Implemented multi-user team collaboration tools'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Romeo Forestry',
      location: 'Western Pennsylvania',
      period: '2024 - Present',
      description: 'Developed professional website and digital presence for forestry services company serving multiple states. Created responsive web application showcasing sustainable harvesting and land management services.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
      achievements: [
        'Built responsive website for multi-state forestry company',
        'Implemented professional branding and digital strategy',
        'Created user-friendly interface for service inquiries',
        'Optimized for mobile and desktop experiences'
      ]
    },
    {
      title: 'Cybersecurity Student',
      company: 'Slippery Rock University',
      location: 'Slippery Rock, Pennsylvania',
      period: '2023 - 2027',
      description: 'Pursuing Bachelor\'s degree in Cybersecurity with a minor in Homeland Security. Focus on ethical hacking, cloud security, system protection, and security automation.',
      technologies: ['Linux', 'Python', 'Bash', 'Security Tools'],
      achievements: [
        'Junior year cybersecurity student',
        'Minor in Homeland Security',
        'Focus on ethical hacking and cloud security',
        'Expected graduation: Spring 2027'
      ]
    }
  ];

  const certifications = [
    { name: 'AWS Cloud Practitioner', status: 'In Progress', color: 'primary' },
    { name: 'CompTIA Security+', status: 'Planned', color: 'accent' },
    { name: 'Certified Ethical Hacker', status: 'Planned', color: 'pearl' }
  ];

  const interests = [
    { name: 'Ethical Hacking', icon: '🎯' },
    { name: 'Cloud Security', icon: '☁️' },
    { name: 'AI & Automation', icon: '🤖' },
    { name: 'System Protection', icon: '🛡️' },
    { name: 'Open Source', icon: '🔓' },
    { name: 'Business Innovation', icon: '💡' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      skills.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSkills(prev => [...prev, index]);
        }, index * 100);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      frontend: 'from-primary-500 to-accent-500',
      backend: 'from-accent-500 to-pearl-500',
      security: 'from-primary-600 to-primary-800',
      cloud: 'from-pearl-500 to-primary-500'
    };
    return colors[category] || 'from-primary-500 to-accent-500';
  };

  const getCategoryBorder = (category) => {
    const borders = {
      frontend: 'border-primary-500/30',
      backend: 'border-accent-500/30',
      security: 'border-primary-600/30',
      cloud: 'border-pearl-500/30'
    };
    return borders[category] || 'border-primary-500/30';
  };

  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="pearl-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a cybersecurity student passionate about ethical hacking, cloud security, and building innovative solutions. 
            Currently co-founding Summit Automation while pursuing my degree at Slippery Rock University.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Personal Story */}
          <div className="lg:col-span-2 space-y-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 pearl-text">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As a junior at Slippery Rock University studying Cybersecurity with a minor in Homeland Security, 
                  I'm deeply passionate about the intersection of security and innovation. My journey began with 
                  curiosity about how systems work and evolved into a mission to protect them.
                </p>
                <p>
                  In 2025, I co-founded Summit Automation, where we're revolutionizing business workflows through 
                  AI-powered automation. Our platform helps businesses save over 20 hours per week on administrative 
                  tasks, allowing them to focus on growth and innovation.
                </p>
                <p>
                  My motto: <span className="pearl-text font-semibold">"Always open to discussing cybersecurity, 
                  collaborating on projects, or connecting with fellow security enthusiasts!"</span>
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 pearl-text">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary-500/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full animate-pulse"></div>
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                      <p className="pearl-text font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-400">{exp.location} • {exp.period}</p>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Key Achievements</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-300 flex items-start">
                            <span className="text-primary-400 mr-2">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs bg-gray-700/50 text-primary-300 rounded-full border border-primary-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="pearl-card">
              <div className="pearl-card-content text-center">
                <h3 className="text-xl font-bold mb-4 pearl-text">Quick Stats</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold pearl-text">Spring 2027</div>
                    <div className="text-sm text-gray-400">Graduation</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold pearl-text">Co-Founder</div>
                    <div className="text-sm text-gray-400">Summit Automation</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold pearl-text">Pennsylvania</div>
                    <div className="text-sm text-gray-400">Location</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4 pearl-text">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                    <div>
                      <p className="text-white font-medium text-sm">{cert.name}</p>
                      <p className={`text-xs ${cert.status === 'In Progress' ? 'text-primary-400' : 'text-gray-400'}`}>
                        {cert.status}
                      </p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      cert.status === 'In Progress' ? 'bg-primary-500 animate-pulse' : 'bg-gray-500'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4 pearl-text">Interests</h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-primary-500/30 transition-colors">
                    <span className="text-xl mr-3">{interest.icon}</span>
                    <span className="text-sm text-gray-300">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="card">
          <h3 className="text-3xl font-bold text-center mb-8 pearl-text">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className={`p-6 bg-gray-700/30 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-glow-red ${getCategoryBorder(skill.category)} ${
                  visibleSkills.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <span className="font-semibold text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                
                <div className="skill-bar mb-2">
                  <div 
                    className={`skill-progress bg-gradient-to-r ${getCategoryColor(skill.category)}`}
                    style={{
                      width: visibleSkills.includes(index) ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>
                
                <div className="text-xs text-gray-400 capitalize">{skill.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="pearl-card">
            <div className="pearl-card-content text-center">
              <h3 className="text-2xl font-bold mb-4 pearl-text">Let's Connect</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Always excited to discuss cybersecurity, collaborate on projects, or connect with fellow security enthusiasts. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get In Touch
                </a>
                <a 
                  href="https://github.com/Brandon-Allshouse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;