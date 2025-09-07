# Freshcart E-commerce Template with i18n Support

A modern, responsive e-commerce template built with Tailwind CSS and featuring complete internationalization (i18n) support.

## 🌐 Live Demo

**GitHub Pages**: [https://momostafas.github.io/landing-page-with-localization](https://momostafas.github.io/landing-page-with-localization)

## ✨ Features

- 🛒 **Complete E-commerce Template** - Modern shopping cart, product galleries, and checkout flow
- 🌍 **Internationalization (i18n)** - Support for English and German with easy language switching
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚡ **Fast Performance** - Optimized images and minified assets
- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🔧 **Developer Friendly** - Gulp build system with hot reload

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/momostafas/landing-page-with-localization.git
   cd landing-page-with-localization
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3200`

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌍 Internationalization (i18n)

The template includes a complete i18n system with:

- **Language Support**: English and German
- **Language Switching**: Click the language dropdown in the top navigation
- **Persistent Selection**: Your language choice is saved in localStorage
- **Automatic Translation**: All text elements update instantly

### Adding New Languages

1. Add translations to `src/assets/js/i18n.js`
2. Update the language dropdown in `src/partials/navbar.html`
3. Add language-specific flag icons

## 📁 Project Structure

```
├── src/                    # Source files
│   ├── assets/            # CSS, JS, images
│   │   ├── css/           # Compiled CSS
│   │   ├── js/            # JavaScript files
│   │   │   ├── i18n.js    # i18n implementation
│   │   │   └── vendors/   # Third-party scripts
│   │   └── images/        # Images and icons
│   ├── partials/          # HTML components
│   └── index.html         # Main page
├── dist/                  # Built files (for production)
├── .github/workflows/     # GitHub Actions
└── test-i18n.html        # i18n test page
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm run format` - Format code with Prettier

### Building

The project uses Gulp for building:

- **HTML**: File includes and template processing
- **CSS**: Tailwind CSS compilation and optimization
- **JS**: Concatenation and minification
- **Images**: Optimization and compression

## 🚀 Deployment

### GitHub Pages (Automatic)

The project is set up for automatic deployment to GitHub Pages:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://momostafas.github.io/landing-page-with-localization`

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 🎨 Customization

### Styling
- Modify Tailwind classes in HTML files
- Update `src/assets/tailwind/` for custom components
- Edit `tailwind.config.js` for theme customization

### Content
- Update `src/partials/` for reusable components
- Modify `src/index.html` for main page content
- Add new pages in the `src/` directory

### Translations
- Edit `src/assets/js/i18n.js` for translation keys
- Add `data-i18n` attributes to HTML elements
- Update language dropdown in `src/partials/navbar.html`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Bootstrap](https://getbootstrap.com/) for additional components
- [Swiper](https://swiperjs.com/) for touch sliders
- [Tabler Icons](https://tabler-icons.io/) for beautiful icons

## 📞 Support

For support, email your-email@example.com or create an issue in the repository.

---

**Live Demo**: [https://momostafas.github.io/landing-page-with-localization](https://momostafas.github.io/landing-page-with-localization)