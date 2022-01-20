
import  i18n  from 'i18next';
import { initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import categoriesEn from '../data/categories-en.json'
import categoriesFr from '../data/categories-fr.json'


i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
     resources: {
      en: {
        translation: {
          "title": "Just a curious guy",
          "more": "learn more",
          "categories": categoriesEn.categories
        } 
      },
      fr: {
        translation: {
          "title": "Juste quelqu'un de curieux",
          "more": "en savoir plus",
          "categories": categoriesFr.categories
        } 
      }
    }
});
     
export default i18n;

