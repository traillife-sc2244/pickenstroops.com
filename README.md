# Pickens Troops Website

A single-page Jekyll website that serves as a landing page connecting visitors to Trail Life USA Troop SC-2244 and American Heritage Girls Troop SC-4224.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Split-Screen Layout**: Two full-screen sections for each troop program
- **Interactive Elements**: Hover effects, animations, and click feedback
- **Accessibility**: Keyboard navigation, screen reader support, and ARIA labels
- **Performance**: Optimized loading and preconnect hints
- **Touch Support**: Swipe gestures for mobile devices

## Quick Start

### Prerequisites

- Ruby 2.7 or higher
- Jekyll 4.0 or higher
- Git

### Installation

1. **Clone or download** this repository to your local machine

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Run the development server**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site** at `http://localhost:4000`

### Deployment to GitHub Pages

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save the settings

3. **Custom Domain** (optional):
   - Add your domain to the CNAME file
   - Configure DNS settings with your domain provider

## Customization

### Content Updates

- **Main content**: Edit `index.md` to update the information section
- **Layout**: Modify `_layouts/home.html` for structural changes
- **Styling**: Update `assets/css/style.css` for visual changes
- **Functionality**: Edit `assets/js/main.js` for interactive features

### Adding Background Images

To add custom background images for each troop section:

1. **Add images** to `assets/images/` directory
2. **Update CSS** in `assets/css/style.css`:

```css
.trail-life {
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(59, 130, 246, 0.8) 100%),
                url('/assets/images/trail-life-bg.jpg');
    background-size: cover;
    background-position: center;
}

.ahg {
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.8) 0%, rgba(168, 85, 247, 0.8) 100%),
                url('/assets/images/ahg-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

### Updating Links

- **Trail Life USA**: Update the URL in `_layouts/home.html` (line 6)
- **American Heritage Girls**: Update the URL in `_layouts/home.html` (line 20)

## File Structure

```
pickenstroops.com/
├── _config.yml          # Jekyll configuration
├── _layouts/
│   ├── base.html        # Base template
│   └── home.html        # Home page layout
├── assets/
│   ├── css/
│   │   └── style.css    # Main stylesheet
│   ├── js/
│   │   └── main.js      # JavaScript functionality
│   └── images/          # Image assets
├── index.md             # Main content
├── Gemfile              # Ruby dependencies
├── CNAME                # Custom domain
└── README.md            # This file
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The site is optimized for:
- **Fast loading**: Minimal dependencies, optimized assets
- **SEO**: Proper meta tags, structured data
- **Accessibility**: WCAG 2.1 AA compliance
- **Mobile**: Touch-friendly, responsive design

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `bundle exec jekyll serve`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or issues:
- Create an issue in this repository
- Contact the website administrator

---

**Built with Jekyll** - A static site generator for GitHub Pages