import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import englishLocales from "./english";
import persianLocales from "./persian";

const resources = {
  fa: {
    translation: persianLocales,
  },
  en: {
    translation: englishLocales,
  },
};


//@ts-ignore
const lng = resources[localStorage.getItem("lang")]
  ? localStorage.read("lang")
  : "fa";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    ns: ["translation"],
    defaultNS: "translation",
    //@ts-ignore
    lng,
    fallbackLng: "fa", // use fa if detected lng is not available
    react: {
      bindI18n: "languageChanged loaded",
      nsMode: "default",
    },
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    //@ts-ignore
    document.querySelector("html").setAttribute("lang", i18n.language);

    return this;
  });

export default i18n;
