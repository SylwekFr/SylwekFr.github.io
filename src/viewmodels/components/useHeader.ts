import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'

export function useHeader() {
  const { locale } = useI18n()
  const language = ref(locale.value)
  const theme = useTheme()
  const isDark = computed(() => theme.global.current.value.dark)

  function onChangeLanguage(val: string) {
    locale.value = val
    language.value = val
  }

  function onChangeMode() {
    theme.toggle()
  }

  return {
    language,
    onChangeLanguage,
    onChangeMode,
    isDark
  }
}