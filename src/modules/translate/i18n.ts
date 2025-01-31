import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { messages } from "./languages";

i18n.use(initReactI18next).init({
  resources: messages,
  fallbackLng: "pt",
  defaultNS: ["translation"],
  ns: ["translation"],
  lng: "pt",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
