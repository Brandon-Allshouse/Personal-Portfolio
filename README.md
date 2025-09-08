# Brandon Allshouse - Personal Portfolio

A modern, responsive portfolio website showcasing cybersecurity projects, development skills, and professional experience. Built with React, Tailwind CSS, and featuring dark theme with red accent colors and pearlescent effects.

🌐 **Live Site**: [brandonallshouse.dev](https://brandonallshouse.dev)

![Portfolio Screenshot](./public/images/projects/personal-portfolio.svg)

## 🚀 Features

### 🎨 Design & UI
- **Dark Theme**: Sleek dark design with red accent colors
- **Pearlescent Effects**: Animated gradient borders and pearl shimmer effects
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations**: CSS animations and transitions throughout
- **Matrix Background**: Cybersecurity-themed visual effects

### 📱 Components
- **Hero Section**: Typewriter effect, animated profile circle, social links
- **About Section**: Skills visualization, experience timeline, tech stack
- **Projects Section**: Filterable project showcase with live previews
- **Contact Section**: Contact form with validation and social links
- **Navigation**: Smooth scrolling navigation with mobile hamburger menu

### ⚡ Performance
- **Vite**: Lightning-fast build tool and development server
- **Optimized Images**: SVG placeholders for project screenshots
- **Lazy Loading**: Components render with staggered animations
- **SEO Optimized**: Meta tags, structured data, and social cards

## 🛠 Tech Stack

- **Frontend**: React 18 with Hooks
- **Styling**: Tailwind CSS v3 with custom theme
- **Build Tool**: Vite
- **Animations**: Custom CSS keyframes and Tailwind animations
- **Typography**: Inter (main) + JetBrains Mono (code)
- **Icons**: Custom SVG icons and Heroicons

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Brandon-Allshouse/Personal-Portfolio.git
   cd Personal-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting (if configured)
npm run lint

# Run type checking (if configured)
npm run typecheck
```

## 🎯 Project Structure

```
Personal-Portfolio/
├── public/
│   ├── images/
│   │   └── projects/          # Project screenshots/previews
│   ├── vite.svg
│   └── og-image.jpg          # Social media preview image
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Landing section
│   │   ├── About.jsx         # About section
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Site footer
│   ├── styles/
│   │   └── index.css         # Global styles + Tailwind
│   ├── App.jsx              # Main app component
│   └── main.jsx             # React entry point
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Red shades */ },
  accent: { /* Pink shades */ },
  pearl: { /* Purple/pearl shades */ }
}
```

### Animations
Custom animations are defined in:
- `tailwind.config.js` - Tailwind animation classes
- `src/styles/index.css` - CSS keyframes and pearl effects

### Content
Update personal information in:
- `src/components/Hero.jsx` - Name, titles, social links
- `src/components/About.jsx` - Bio, skills, experience
- `src/components/Projects.jsx` - Project data and descriptions
- `src/components/Contact.jsx` - Contact information
- `index.html` - Meta tags and SEO data

## 🖼️ Adding Project Screenshots

1. **Add images** to `public/images/projects/`
2. **Update project data** in `src/components/Projects.jsx`:
   ```javascript
   {
     id: 1,
     title: "Project Name",
     image: "/images/projects/your-image.jpg", // Update this path
     // ... other project data
   }
   ```

### Recommended Image Specifications
- **Format**: JPG or PNG (SVG for illustrations)
- **Size**: 800x600px minimum (1200x800px for high-DPI displays)
- **Optimization**: Compress images for web performance

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist/` folder with optimized static files.

### Deploy to Popular Platforms

**Vercel** (Recommended):
```bash
npm i -g vercel
vercel
```

**Netlify**:
```bash
npm run build
# Upload dist/ folder to Netlify
```

**GitHub Pages**:
```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/Personal-Portfolio"
npm run build
npx gh-pages -d dist
```

## 🔧 Configuration

### Environment Variables
Create `.env.local` for any environment-specific settings:
```bash
VITE_CONTACT_FORM_URL=your-form-endpoint
VITE_ANALYTICS_ID=your-analytics-id
```

### SEO Configuration
Update meta tags in `index.html`:
- Page title and description
- Open Graph tags for social media
- Twitter Card tags
- Structured data (JSON-LD)

## 📱 Mobile Optimization

The site is fully responsive with:
- **Mobile-first design** approach
- **Touch-friendly** navigation and buttons
- **Optimized images** for different screen densities
- **Fast loading** on mobile networks
- **Accessible** design patterns

### Breakpoints
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## 👤 Author

**Brandon Allshouse**
- Website: [brandonallshouse.dev](https://brandonallshouse.dev)
- GitHub: [@Brandon-Allshouse](https://github.com/Brandon-Allshouse)
- LinkedIn: [Brandon Allshouse](https://www.linkedin.com/in/brandon-allshouse-37776a274/)
- Email: bja1005@sru.edu
