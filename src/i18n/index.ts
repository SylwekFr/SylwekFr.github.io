import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

const messages = { en, fr }

const getBrowserLocale = () => {
  if (typeof window === 'undefined') return 'en'

  const savedLocale = localStorage.getItem('locale')
  const browserLocale = navigator.language.split('-')[0]
  const supportedLocales = ['en', 'fr']

  return savedLocale ||
    (supportedLocales.includes(browserLocale) ? browserLocale : 'en')
}


export default createI18n({
  locale: getBrowserLocale(),
  fallbackLocale: 'en',
  messages,
  legacy: false
})