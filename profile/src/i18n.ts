import { createI18n } from 'vue-i18n'
import id from './locales/id.json'
import en from './locales/en.json'
import zh from './locales/zh.json'

const i18n = createI18n({
  legacy: false,
  locale: 'id',
  fallbackLocale: 'en',
  messages: { id, en, zh }
})

export default i18n