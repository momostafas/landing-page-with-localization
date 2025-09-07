// Simple i18n Implementation for Freshcart
// Translation resources
const translations = {
  en: {
    // Navigation
    "home": "Home",
    "dropdown_menu": "Dropdown Menu",
    "mega_menu": "Mega menu",
    "dashboard": "Dashboard",
    "all_departments": "All Departments",
    "location": "Location",
    "search_placeholder": "Search for products",
    
    // Top bar
    "super_value_deals": "Super Value Deals - Save more with coupons",
    
    // Categories
    "dairy_bread_eggs": "Dairy, Bread & Eggs",
    "snacks_munchies": "Snacks & Munchies",
    "fruits_vegetables": "Fruits & Vegetables",
    "cold_drinks_juices": "Cold Drinks & Juices",
    "breakfast_instant_food": "Breakfast & Instant Food",
    "bakery_biscuits": "Bakery & Biscuits",
    "chicken_meat_fish": "Chicken, Meat & Fish",
    
    // Cart
    "shop_cart": "Shop Cart",
    "continue_shopping": "Continue Shopping",
    "update_cart": "Update Cart",
    "remove": "Remove",
    "free_delivery": "You've got FREE delivery. Start",
    "checkout_now": "checkout now!",
    
    // Modal
    "sign_up": "Sign Up",
    "name": "Name",
    "enter_name": "Enter Your Name",
    "email_address": "Email address",
    "enter_email": "Enter Email address",
    "password": "Password",
    "enter_password": "Enter Password",
    "terms_service": "Terms of Service",
    "privacy_policy": "Privacy Policy",
    "already_have_account": "Already have an account?",
    "sign_in": "Sign in",
    "by_signup_agree": "By Signup, you agree to our",
    "and": "&",
    
    // Location Modal
    "choose_delivery_location": "Choose your Delivery Location",
    "enter_address_offer": "Enter your address and we will specify the offer you area.",
    "select_location": "Select Location",
    "clear_all": "Clear All",
    
    // Products
    "haldiram_sev_bhujia": "Haldiram's Sev Bhujia",
    "nutrichoice_digestive": "NutriChoice Digestive",
    "cadbury_5_star": "Cadbury 5 Star Chocolate",
    "onion_flavour_potato": "Onion Flavour Potato",
    "salted_instant_popcorn": "Salted Instant Popcorn",
    
    // Common
    "lb": "lb",
    "kg": "kg",
    "g": "g",
    "min": "Min:",
    
    // Language names
    "english": "English",
    "deutsch": "Deutsch"
  },
  de: {
    // Navigation
    "home": "Startseite",
    "dropdown_menu": "Dropdown-Menü",
    "mega_menu": "Mega-Menü",
    "dashboard": "Dashboard",
    "all_departments": "Alle Abteilungen",
    "location": "Standort",
    "search_placeholder": "Nach Produkten suchen",
    
    // Top bar
    "super_value_deals": "Super Value Deals - Sparen Sie mehr mit Gutscheinen",
    
    // Categories
    "dairy_bread_eggs": "Milchprodukte, Brot & Eier",
    "snacks_munchies": "Snacks & Knabbereien",
    "fruits_vegetables": "Obst & Gemüse",
    "cold_drinks_juices": "Kaltgetränke & Säfte",
    "breakfast_instant_food": "Frühstück & Instant Food",
    "bakery_biscuits": "Bäckerei & Kekse",
    "chicken_meat_fish": "Huhn, Fleisch & Fisch",
    
    // Cart
    "shop_cart": "Einkaufswagen",
    "continue_shopping": "Einkauf fortsetzen",
    "update_cart": "Warenkorb aktualisieren",
    "remove": "Entfernen",
    "free_delivery": "Sie haben KOSTENLOSEN Versand. Beginnen Sie",
    "checkout_now": "jetzt mit dem Checkout!",
    
    // Modal
    "sign_up": "Registrieren",
    "name": "Name",
    "enter_name": "Geben Sie Ihren Namen ein",
    "email_address": "E-Mail-Adresse",
    "enter_email": "E-Mail-Adresse eingeben",
    "password": "Passwort",
    "enter_password": "Passwort eingeben",
    "terms_service": "Nutzungsbedingungen",
    "privacy_policy": "Datenschutzrichtlinie",
    "already_have_account": "Haben Sie bereits ein Konto?",
    "sign_in": "Anmelden",
    "by_signup_agree": "Mit der Registrierung stimmen Sie unseren",
    "and": "&",
    
    // Location Modal
    "choose_delivery_location": "Wählen Sie Ihren Lieferort",
    "enter_address_offer": "Geben Sie Ihre Adresse ein und wir spezifizieren das Angebot für Ihr Gebiet.",
    "select_location": "Standort auswählen",
    "clear_all": "Alle löschen",
    
    // Products
    "haldiram_sev_bhujia": "Haldiram's Sev Bhujia",
    "nutrichoice_digestive": "NutriChoice Verdauung",
    "cadbury_5_star": "Cadbury 5 Star Schokolade",
    "onion_flavour_potato": "Zwiebel-Geschmack Kartoffel",
    "salted_instant_popcorn": "Gesalzenes Instant-Popcorn",
    
    // Common
    "lb": "Pfund",
    "kg": "kg",
    "g": "g",
    "min": "Min:",
    
    // Language names
    "english": "English",
    "deutsch": "Deutsch"
  }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'en';

// Helper function to get translation
function t(key) {
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
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing translations...'); // Debug log
  updateTranslations();
  
  // Set initial language display
  const selectedLanguageElement = document.getElementById('selectedLanguage');
  if (selectedLanguageElement) {
    selectedLanguageElement.textContent = t(currentLanguage.toLowerCase());
  }
});
