import React, { useState, useEffect } from 'react';
import GitHubService from '../services/github';

const About = () => {
  const [skills, setSkills] = useState([]);
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub language stats
    const fetchSkills = async () => {
      try {
        setIsLoading(true);
        const githubSkills = await GitHubService.fetchLanguageStats();
        setSkills(githubSkills);

        // Animate skills appearance
        setTimeout(() => {
          githubSkills.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSkills(prev => [...prev, index]);
            }, index * 100);
          });
        }, 500);
      } catch (error) {
        console.error('Error loading skills:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-400">
            About
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cybersecurity student at SRU. Co-founder of Summit Automation.
            I build things and solve problems.
          </p>
        </div>

        {/* Simple info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">Student</div>
            <div className="text-gray-400">Cybersecurity @ SRU</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">Co-Founder</div>
            <div className="text-gray-400">Summit Automation</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">2027</div>
            <div className="text-gray-400">Graduation</div>
          </div>
        </div>

        {/* Languages from GitHub */}
        <div className="card">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary-400">Languages</h3>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30 animate-pulse"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-600 rounded mr-3"></div>
                      <div className="h-4 bg-gray-600 rounded w-16"></div>
                    </div>
                    <div className="h-4 bg-gray-600 rounded w-8"></div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gray-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : skills.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-4 bg-gray-700/30 rounded-lg border border-gray-600/30 transition-all duration-300 hover:border-primary-500/50 ${
                    visibleSkills.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{skill.icon}</span>
                      <span className="text-white font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className="text-primary-400 font-bold text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: visibleSkills.includes(index) ? `${skill.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400">No language data available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;