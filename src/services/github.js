const GITHUB_USERNAME = 'Brandon-Allshouse';
const GITHUB_API_BASE = 'https://api.github.com';

class GitHubService {
  constructor() {
    this.cache = new Map();
    this.cacheTTL = 10 * 60 * 1000; // 10 minutes
  }

  async fetchWithCache(url, key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTTL) {
      return cached.data;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();

      this.cache.set(key, { data, timestamp: Date.now() });
      return data;
    } catch (error) {
      console.error(`Error fetching ${key}:`, error);
      return null;
    }
  }

  async fetchUserData() {
    return await this.fetchWithCache(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`, 'userData');
  }

  async fetchRepositories() {
    const data = await this.fetchWithCache(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      'repositories'
    );

    if (!data) return [];

    // Filter out forked repos and return only original projects
    return data.filter(repo => !repo.fork);
  }

  async fetchUserStats() {
    try {
      const [userData, repos] = await Promise.all([
        this.fetchUserData(),
        this.fetchRepositories()
      ]);

      if (!userData || !repos) {
        throw new Error('Failed to fetch GitHub data');
      }

      // Calculate basic stats
      const totalRepos = repos.length;
      const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
      const languages = {};

      // Count languages (this is simplified - in reality you'd need additional API calls)
      repos.forEach(repo => {
        if (repo.language) {
          languages[repo.language] = (languages[repo.language] || 0) + 1;
        }
      });

      const topLanguages = Object.entries(languages)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([lang, count]) => ({ name: lang, count }));

      return {
        totalRepos,
        totalStars,
        followers: userData.followers,
        following: userData.following,
        topLanguages,
        profileUrl: userData.html_url,
        avatarUrl: userData.avatar_url,
        bio: userData.bio,
        location: userData.location,
        company: userData.company,
        createdAt: userData.created_at
      };
    } catch (error) {
      console.error('Error calculating GitHub stats:', error);
      return {
        totalRepos: 6, // Fallback to current count
        totalStars: 0,
        followers: 0,
        following: 0,
        topLanguages: [
          { name: 'JavaScript', count: 3 },
          { name: 'Python', count: 2 },
          { name: 'HTML', count: 2 }
        ],
        profileUrl: `https://github.com/${GITHUB_USERNAME}`,
        avatarUrl: null,
        bio: null,
        location: null,
        company: null,
        createdAt: null
      };
    }
  }

  async fetchLanguageStats() {
    try {
      const repos = await this.fetchRepositories();
      const languageTotals = {};

      // Fetch language data for each repository
      await Promise.all(repos.map(async (repo) => {
        try {
          const response = await fetch(`${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repo.name}/languages`);
          if (response.ok) {
            const languages = await response.json();

            // Add language bytes to totals
            Object.entries(languages).forEach(([lang, bytes]) => {
              languageTotals[lang] = (languageTotals[lang] || 0) + bytes;
            });
          }
        } catch (error) {
          console.error(`Error fetching languages for ${repo.name}:`, error);
        }
      }));

      // Calculate total bytes across all languages
      const totalBytes = Object.values(languageTotals).reduce((sum, bytes) => sum + bytes, 0);

      if (totalBytes === 0) {
        throw new Error('No language data found');
      }

      // Convert to skills format with actual percentages based on lines of code
      const skills = Object.entries(languageTotals)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 6) // Top 6 languages for cleaner display
        .map(([name, bytes]) => ({
          name,
          level: Math.round((bytes / totalBytes) * 100),
          category: this.getCategoryForLanguage(name),
          icon: this.getIconForLanguage(name)
        }))
        .filter(skill => skill.level >= 5); // Only show languages with 5%+ usage

      return skills;
    } catch (error) {
      console.error('Error fetching language stats:', error);
      // Return fallback data
      return [
        { name: 'JavaScript', level: 45, category: 'frontend', icon: '⚡' },
        { name: 'Python', level: 30, category: 'backend', icon: '🐍' },
        { name: 'HTML', level: 15, category: 'frontend', icon: '🎨' },
        { name: 'CSS', level: 10, category: 'frontend', icon: '🎨' }
      ];
    }
  }

  getCategoryForLanguage(language) {
    const categories = {
      'JavaScript': 'frontend',
      'TypeScript': 'frontend',
      'HTML': 'frontend',
      'CSS': 'frontend',
      'Python': 'backend',
      'Java': 'backend',
      'C': 'systems',
      'C++': 'systems',
      'Go': 'backend',
      'Rust': 'systems',
      'Shell': 'tools',
      'Bash': 'tools'
    };
    return categories[language] || 'other';
  }

  getIconForLanguage(language) {
    const icons = {
      'JavaScript': '⚡',
      'TypeScript': '🔷',
      'Python': '🐍',
      'HTML': '🎨',
      'CSS': '🎨',
      'Java': '☕',
      'C': '🔧',
      'C++': '⚙️',
      'Go': '🚀',
      'Rust': '🦀',
      'Shell': '💻',
      'Bash': '💻'
    };
    return icons[language] || '📄';
  }
}

export default new GitHubService();