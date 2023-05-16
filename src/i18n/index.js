import { createI18n } from "vue-i18n";

import en from "./en/translation";
import zh from "./zh-HK/translation";

const locale = localStorage.site_lang || "zh-HK";
localStorage.site_lang = locale;

const i18n = createI18n({
  // Composition API
  legacy: false,

  // default locale
  locale: locale,
  fallbackLocale: "en",

  // translations
  messages: {
    en,
    "zh-HK": zh
  },
});

document.documentElement.setAttribute("lang", locale);

export default i18n;
