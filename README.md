# Efe Eroglu - Portfolio Website

A modern, professional portfolio website for a Software Engineer & Masters Student. Built with React, featuring smooth animations, responsive design, and a clean UI/UX.

## 🎯 Project Overview

This portfolio showcases the work and achievements of a software engineer and academic researcher, combining professional projects with academic research in one cohesive digital presence.

**Theme:** "Technology meets Research"

## ✨ Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Optimized for speed and SEO
- **React Router**: Multi-page navigation
- **Framer Motion**: Smooth animations and transitions
- **Contact Form**: Functional contact form
- **Project Showcase**: Filterable project gallery
- **Research Section**: Academic publications and work
- **Timeline**: Education and experience timeline

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **React Typed**: Typing animation effect
- **CSS3**: Modern styling with flexbox and grid

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation bar
│   ├── Footer.js           # Footer component
│   ├── ScrollToTop.js      # Scroll to top on route change
│   ├── Home/
│   │   ├── Home.js         # Hero section
│   │   └── Type.js         # Typed animation
│   ├── About/
│   │   └── About.js        # About section
│   ├── Projects/
│   │   └── Projects.js     # Projects showcase
│   ├── Research/
│   │   └── Research.js     # Research section
│   └── Contact/
│       └── Contact.js      # Contact form
├── App.js                  # Main app component
└── index.js               # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/efeeroglu/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📝 Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Home/Home.js` - Hero section content
- `src/components/About/About.js` - Education, experience, skills
- `src/components/Projects/Projects.js` - Your projects
- `src/components/Research/Research.js` - Your research
- `src/components/Contact/Contact.js` - Contact information

### Colors

The main theme colors are defined in CSS custom properties:
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Violet)

Update colors in the respective CSS files to match your brand.

### Images

Replace placeholder images in the `public` folder with your own.

## 🌐 Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

### Other Platforms

- **Netlify**: Connect your repo for automatic deployments
- **Vercel**: Push to GitHub and connect for deployments
- **Heroku**: Follow Heroku's React deployment guide

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Efe Eroglu**
- GitHub: [@efeeroglu](https://github.com/efeeroglu)
- LinkedIn: [Efe Eroglu](https://linkedin.com/in/efeeroglu)
- Email: efe.eroglu@example.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Built with ❤️ using React
