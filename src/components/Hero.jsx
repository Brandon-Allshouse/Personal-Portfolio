import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const titles = [
    'Cybersecurity Student',
    'Co-Founder of Summit Automation', 
    'Ethical Hacker',
    'Cloud Security Enthusiast',
    'Full Stack Developer'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const typeWriter = () => {
      const currentTitle = titles[currentIndex];
      if (currentText.length < currentTitle.length) {
        setCurrentText(currentTitle.slice(0, currentText.length + 1));
      } else {
        setTimeout(() => {
          setCurrentText('');
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    };

    const timer = setTimeout(typeWriter, 100);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, titles]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent-500/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-pearl-500/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-400/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 left-1/3 w-12 h-12 bg-accent-400/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Matrix-like effect with red theme */}
      <div className="absolute inset-0 -z-5 opacity-20">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute font-mono text-xs matrix-effect ${
              i % 3 === 0 ? 'text-primary-400' : i % 3 === 1 ? 'text-accent-400' : 'text-pearl-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`particle ${i % 3 === 0 ? 'particle-red' : i % 3 === 1 ? 'particle-pink' : 'particle-purple'} animate-float`}
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="section-container">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span 
                  className="pearl-text relative glitch"
                  data-text="Brandon"
                >
                  Brandon
                </span>
              </h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                  {currentText}
                  <span className="animate-pulse text-primary-400">|</span>
                </h2>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Cybersecurity student at Slippery Rock University with a minor in Homeland Security. 
              Co-founder of Summit Automation, where we're revolutionizing business workflows with AI. 
              Passionate about ethical hacking, cloud security, and building secure applications.
            </p>

            {/* Stats with pearl effects */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="pearl-card">
                <div className="pearl-card-content text-center">
                  <div className="text-2xl md:text-3xl font-bold pearl-text">2027</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Graduation</div>
                </div>
              </div>
              <div className="pearl-card">
                <div className="pearl-card-content text-center">
                  <div className="text-xl md:text-2xl font-bold pearl-text">Co-Founder</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Summit Auto</div>
                </div>
              </div>
              <div className="pearl-card">
                <div className="pearl-card-content text-center">
                  <div className="text-2xl md:text-3xl font-bold pearl-text">10+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={scrollToProjects} className="btn-primary group pearl-shimmer">
                View My Work
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
              <button onClick={scrollToContact} className="btn-outline pearl-shimmer">
                Get In Touch
              </button>
            </div>

            {/* Social Links with pearl effects */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a 
                href="https://github.com/Brandon-Allshouse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-glow-red group pearl-shimmer"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/brandon-allshouse-37776a274/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-glow-red group pearl-shimmer"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://summitautomation.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-glow-red group pearl-shimmer"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Visual Element with enhanced pearl effects */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main profile circle with rotating border */}
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                <div className="pearl-border rounded-full animate-pulse-glow">
                  <div className="pearl-border-content rounded-full flex items-center justify-center animate-pulse">
                    <div className="text-8xl md:text-9xl font-bold pearl-text">BA</div>
                  </div>
                </div>
                
                {/* Floating tech icons with enhanced styling */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-glow-red animate-float hover:animate-pulse-glow">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent-500 to-pearl-500 rounded-xl flex items-center justify-center shadow-pearl animate-float hover:animate-pulse-glow" style={{animationDelay: '2s'}}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pearl-500 to-primary-500 rounded-xl flex items-center justify-center shadow-pearl animate-float hover:animate-pulse-glow" style={{animationDelay: '1s'}}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-glow-red animate-float hover:animate-pulse-glow" style={{animationDelay: '3s'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>

                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-rotate-slow">
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-glow animate-pulse"></div>
                  <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-accent-500 rounded-full -translate-x-1/2 translate-y-1/2 shadow-glow animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute left-0 top-1/2 w-3 h-3 bg-pearl-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-pearl animate-pulse" style={{animationDelay: '2s'}}></div>
                  <div className="absolute right-0 top-1/2 w-3 h-3 bg-primary-400 rounded-full translate-x-1/2 -translate-y-1/2 shadow-glow animate-pulse" style={{animationDelay: '3s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator with pearl styling */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-gray-600 hover:border-primary-500 rounded-full flex justify-center transition-colors duration-300 cursor-pointer">
            <div className="w-1 h-3 bg-gradient-to-b from-primary-500 via-accent-500 to-pearl-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;