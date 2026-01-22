import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

const messages = { en, fr }

const getBrowserLocale = () => {
  if (typeof window === 'undefined') return 'en'

  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) return savedLocale
  const browserLocale = navigator.language.split('-')[0]
  const supportedLocales = ['en', 'fr']
  if (browserLocale) return supportedLocales.includes(browserLocale) ? browserLocale : 'en'
  return 'en'
}


export default createI18n({
  locale: getBrowserLocale(),
  fallbackLocale: 'en',
  messages,
  legacy: false
})