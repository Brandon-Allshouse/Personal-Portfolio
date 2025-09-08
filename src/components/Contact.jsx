import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: 'Email',
      content: 'brandon.allshouse@sru.edu',
      description: 'Best way to reach me for professional inquiries',
      link: 'mailto:brandon.allshouse@sru.edu',
      color: 'from-primary-500 to-accent-500'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      content: 'Connect with me professionally',
      description: 'Let\'s build our network and collaborate',
      link: 'https://www.linkedin.com/in/brandon-allshouse-37776a274/',
      color: 'from-accent-500 to-pearl-500'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      content: 'View my code and projects',
      description: 'Open source contributions and repositories',
      link: 'https://github.com/Brandon-Allshouse',
      color: 'from-pearl-500 to-primary-500'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: 'Summit Automation',
      content: 'Business inquiries',
      description: 'AI automation solutions for your business',
      link: 'https://summitautomation.io',
      color: 'from-primary-600 to-accent-600'
    }
  ];

  const availability = {
    status: 'Available',
    description: 'Open to internships, collaborations, and cybersecurity opportunities',
    nextAvailable: 'Immediate response within 24-48 hours',
    specialties: ['Cybersecurity Consulting', 'Web Development', 'Business Automation', 'Security Analysis']
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary-500/5 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent-500/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pearl-500/5 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="pearl-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss cybersecurity, collaborate on projects, or explore business automation? 
            I'm always excited to connect with fellow developers, security enthusiasts, and innovators.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            {/* Availability Status */}
            <div className="pearl-card">
              <div className="pearl-card-content">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <h3 className="text-xl font-bold text-white">Currently {availability.status}</h3>
                </div>
                <p className="text-gray-300 mb-4">{availability.description}</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-primary-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="text-sm text-gray-400">{availability.nextAvailable}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="card">
              <h3 className="text-lg font-bold mb-4 pearl-text">Areas of Interest</h3>
              <div className="space-y-2">
                {availability.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-primary-400 mr-2">▸</span>
                    <span className="text-gray-300 text-sm">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="card hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start">
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mr-4 group-hover:shadow-glow-red transition-shadow`}>
                        <div className="text-white">
                          {method.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white group-hover:pearl-text transition-colors">{method.title}</h4>
                        <p className="text-primary-300 text-sm font-medium">{method.content}</p>
                        <p className="text-gray-400 text-xs mt-1">{method.description}</p>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 pearl-text">Send me a message</h3>
                <p className="text-gray-400">
                  Have a specific project in mind? Drop me a line and I'll get back to you within 24-48 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project, collaboration idea, or just say hello..."
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">
                    * Required fields
                  </p>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary pearl-shimmer min-w-[180px] ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus && (
                  <div className={`p-4 rounded-xl border ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                      : 'bg-red-500/10 border-red-500/30 text-red-400'
                  }`}>
                    <div className="flex items-center">
                      {submitStatus === 'success' ? (
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"/>
                        </svg>
                      )}
                      <span className="font-medium">
                        {submitStatus === 'success' 
                          ? 'Message sent successfully! I\'ll get back to you within 24-48 hours.' 
                          : 'Something went wrong. Please try again or reach out via email.'}
                      </span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="pearl-card max-w-4xl mx-auto">
            <div className="pearl-card-content text-center">
              <h3 className="text-2xl font-bold mb-4 pearl-text">Ready to Start Something Amazing?</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Whether it's a cybersecurity project, business automation solution, or just a conversation about tech, 
                I'm here to help bring your ideas to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center px-4 py-2 bg-gray-800/50 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-sm text-gray-300">Usually responds within 24 hours</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-gray-800/50 rounded-full">
                  <span className="text-pearl-400 mr-2">🚀</span>
                  <span className="text-sm text-gray-300">Available for new projects</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-gray-800/50 rounded-full">
                  <span className="text-primary-400 mr-2">🤝</span>
                  <span className="text-sm text-gray-300">Open to collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;