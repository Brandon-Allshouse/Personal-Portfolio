import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-2xl font-bold relative group"
            >
              <span className="gradient-text">Brandon</span>
              <span className="text-white">.dev</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white font-medium relative group transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="btn-outline text-sm"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative w-6 h-6 flex flex-col justify-center items-center transition-all duration-300 ${
              isMobileMenuOpen ? 'transform rotate-180' : ''
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'transform rotate-45 translate-y-0.5' : 'transform -translate-y-1'
              }`}
            ></span>
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'transform -rotate-45 -translate-y-0.5' : 'transform translate-y-1'
              }`}
            ></span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-2xl">
            <ul className="py-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 font-medium transition-all duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="px-6 pt-4">
                <a 
                  href="#contact" 
                  className="btn-primary w-full text-center inline-block"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;