import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Brandon-Allshouse',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/brandon-allshouse-37776a274/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Summit Automation',
      url: 'https://summitautomation.io',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:brandon.allshouse@sru.edu',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ];

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Projects',
      links: [
        { name: 'Summit Automation', href: 'https://summitautomation.io', external: true },
        { name: 'Romeo Forestry', href: 'https://romeoforestry.com', external: true },
        { name: 'GitHub Repositories', href: 'https://github.com/Brandon-Allshouse', external: true }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/brandon-allshouse-37776a274/', external: true },
        { name: 'Email Me', href: 'mailto:brandon.allshouse@sru.edu', external: true },
        { name: 'Schedule a Call', href: '#contact' }
      ]
    }
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">
                  <span className="pearl-text">Brandon</span>
                  <span className="text-white">.dev</span>
                </h3>
                <p className="text-gray-400 mt-3 leading-relaxed">
                  Cybersecurity student, Co-founder of Summit Automation, and passionate developer 
                  building secure, innovative solutions.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-sm text-gray-400">Available for opportunities</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-400">Based in Pennsylvania</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-400">Graduating Spring 2027</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-primary-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-105 hover:shadow-glow-red group pearl-shimmer"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="lg:col-span-1">
                <h4 className="text-lg font-semibold text-white mb-6 pearl-text">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : '_self'}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        onClick={(e) => {
                          if (!link.external) {
                            e.preventDefault();
                            handleNavClick(link.href);
                          }
                        }}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm hover:underline flex items-center group"
                      >
                        {link.name}
                        {link.external && (
                          <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {currentYear} Brandon Allshouse. Built with{' '}
                <span className="text-primary-400">React</span> +{' '}
                <span className="text-accent-400">Tailwind CSS</span>.
              </p>
              <p className="mt-1">
                Designed and developed with 💻 and ☕
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>React 18</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Vite</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Easter Egg */}
        <div className="py-4 text-center">
          <p className="text-xs text-gray-600 hover:text-primary-400 transition-colors cursor-default">
            "Always open to discussing cybersecurity, collaborating on projects, or connecting with fellow security enthusiasts!" 🛡️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;