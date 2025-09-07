# Internationalization (i18n) Implementation for Freshcart

## Overview
This project now includes a complete internationalization (i18n) system that allows the website to be displayed in multiple languages. The implementation supports English and German (Deutsch) with easy extensibility for additional languages.

## Features
- ✅ Language switching between English and German
- ✅ Persistent language selection (stored in localStorage)
- ✅ Automatic translation of all text elements
- ✅ Support for input placeholders
- ✅ Language-specific flag icons
- ✅ Easy to add new languages

## Files Added/Modified

### New Files
- `src/assets/js/i18n.js` - Main i18n implementation
- `test-i18n.html` - Test page to demonstrate functionality
- `I18N_README.md` - This documentation file

### Modified Files
- `src/partials/scripts.html` - Added i18n script inclusion
- `src/partials/navbar.html` - Added data-i18n attributes to all text elements
- `src/assets/js/vendors/language.js` - Updated to work with i18n system
- `package.json` - Added i18n dependencies

## Dependencies Added
- `i18next` - Core i18n library
- `i18next-browser-languagedetector` - Automatic language detection
- `i18next-http-backend` - HTTP backend for loading translations

## How It Works

### 1. Translation System
The translation system uses a simple JavaScript object structure:
```javascript
const translations = {
  en: {
    "home": "Home",
    "search_placeholder": "Search for products",
    // ... more translations
  },
  de: {
    "home": "Startseite", 
    "search_placeholder": "Nach Produkten suchen",
    // ... more translations
  }
};
```

### 2. HTML Integration
Text elements are marked with `data-i18n` attributes:
```html
<span data-i18n="home">Home</span>
<input type="search" data-i18n="search_placeholder" placeholder="Search for products" />
```

### 3. Language Switching
The language can be changed using:
```javascript
changeLanguage('en'); // Switch to English
changeLanguage('de'); // Switch to German
```

### 4. Automatic Updates
When the language changes, all elements with `data-i18n` attributes are automatically updated with the appropriate translations.

## Usage

### For Users
1. Click on the language dropdown in the top navigation
2. Select either "English" or "Deutsch"
3. The entire page will update to the selected language
4. Your language preference is saved and will be remembered on future visits

### For Developers

#### Adding New Languages
1. Add a new language object to the `translations` object in `i18n.js`:
```javascript
const translations = {
  en: { /* English translations */ },
  de: { /* German translations */ },
  fr: { /* French translations */ },
  // Add your new language here
};
```

2. Add the language option to the HTML dropdown in `navbar.html`
3. Update the `changeLanguage` function to handle the new language code

#### Adding New Translations
1. Add the translation key-value pair to all language objects in `i18n.js`
2. Add the `data-i18n="key"` attribute to the HTML element
3. The translation will automatically work

#### Example: Adding a new translation
1. In `i18n.js`, add to all language objects:
```javascript
"new_text": "New Text", // English
"new_text": "Neuer Text", // German
```

2. In HTML:
```html
<span data-i18n="new_text">New Text</span>
```

## Testing
Open `test-i18n.html` in a web browser to test the i18n functionality. This page demonstrates:
- Language switching
- Text translation
- Input placeholder translation
- All major UI elements

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Uses localStorage for language persistence

## Performance
- Lightweight implementation (~5KB minified)
- No external API calls
- Fast language switching
- Minimal impact on page load time

## Future Enhancements
- Add more languages (Spanish, French, Italian, etc.)
- RTL (Right-to-Left) language support
- Dynamic translation loading
- Translation management system
- Pluralization support
- Date/time formatting per locale

## Troubleshooting

### Language not switching
- Check browser console for JavaScript errors
- Ensure `i18n.js` is loaded before other scripts
- Verify `data-i18n` attributes are correctly set

### Missing translations
- Check that the translation key exists in the current language object
- Verify the key name matches exactly (case-sensitive)
- Check browser console for missing key warnings

### Input placeholders not updating
- Ensure the input has both `data-i18n` and `placeholder` attributes
- Check that the input type is supported (text, search, email, password)

## Support
For issues or questions about the i18n implementation, please check:
1. Browser console for errors
2. This documentation
3. The test page (`test-i18n.html`) for working examples
