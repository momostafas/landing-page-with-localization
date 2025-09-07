// Simple i18n Implementation for Freshcart
// Translation resources loaded from external JSON files
let translations = {
  en: {},
  de: {}
};

// Flag to track if translations are loaded
let translationsLoaded = false;

// Function to load translation files
async function loadTranslations() {
  try {
    const [enResponse, deResponse] = await Promise.all([
      fetch('./assets/js/translations/en.json'),
      fetch('./assets/js/translations/de.json')
    ]);
    
    if (enResponse.ok && deResponse.ok) {
      translations.en = await enResponse.json();
      translations.de = await deResponse.json();
      translationsLoaded = true;
      console.log('Translations loaded successfully');
    } else {
      console.error('Failed to load translation files');
      // Fallback to basic translations
      loadFallbackTranslations();
    }
  } catch (error) {
    console.error('Error loading translations:', error);
    // Fallback to basic translations
    loadFallbackTranslations();
  }
}

// Fallback translations in case external files fail to load
function loadFallbackTranslations() {
  translations = {
    en: {
      "home": "Home",
      "search_placeholder": "Search for products",
      "english": "English",
      "deutsch": "Deutsch"
    },
    de: {
      "home": "Startseite", 
      "search_placeholder": "Nach Produkten suchen",
      "english": "English",
      "deutsch": "Deutsch"
    }
  };
  translationsLoaded = true;
}

// Current language
let currentLanguage = localStorage.getItem('language') || 'en';

// Helper function to get translation
function t(key) {
  if (!translationsLoaded) {
    return key; // Return key if translations not loaded yet
  }
  return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Function to change language
function changeLanguage(lang) {
  console.log('Changing language to:', lang); // Debug log
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update the language display
  const selectedLanguageElement = document.getElementById('selectedLanguage');
  if (selectedLanguageElement) {
    selectedLanguageElement.textContent = t(lang.toLowerCase());
  }
  
  // Update the language icon
  const languageIcon = document.getElementById('languageIcon');
  if (languageIcon) {
    switch (lang) {
      case 'en':
        languageIcon.innerHTML = `
          <g clip-path="">
            <path d="M0 0.5H16V12.5H0V0.5Z" fill="#012169" />
            <path d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z" fill="white" />
            <path d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z" fill="#C8102E" />
            <path d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z" fill="white" />
            <path d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z" fill="#C8102E" />
          </g>`;
        break;
      case 'de':
        languageIcon.innerHTML = `
          <g clip-path="url(#clip0_5543_19751)">
            <path d="M0 8.5H16V12.5H0V8.5Z" fill="#FFCE00" />
            <path d="M0 0.5H16V4.5H0V0.5Z" fill="black" />
            <path d="M0 4.5H16V8.5H0V4.5Z" fill="#DD0000" />
          </g>
          <defs>
            <clipPath id="clip0_5543_19751">
              <rect width="16" height="12" fill="white" transform="translate(0 0.5)" />
            </clipPath>
          </defs>`;
        break;
    }
  }
  
  // Update all elements with data-i18n attributes
  updateTranslations();
}

// Function to update all translations on the page
function updateTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  console.log('Found', elements.length, 'elements to translate'); // Debug log
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = t(key);
    
    if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'search' || element.type === 'email' || element.type === 'password')) {
      element.placeholder = translation;
    } else {
      element.textContent = translation;
    }
  });
}

// Make functions globally available
window.changeLanguage = changeLanguage;
window.t = t;
window.updateTranslations = updateTranslations;

// Initialize translations when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM loaded, initializing translations...'); // Debug log
  
  // Load translations first
  await loadTranslations();
  
  // Then update the page
  updateTranslations();
  
  // Set initial language display
  const selectedLanguageElement = document.getElementById('selectedLanguage');
  if (selectedLanguageElement) {
    selectedLanguageElement.textContent = t(currentLanguage.toLowerCase());
  }
});
