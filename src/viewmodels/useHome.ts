import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

type CategoryIndex = {
  name: string
  sumup: string
  picture: string
  path: string
}

export function useHome() {
  const { tm } = useI18n({ useScope: 'global' })
  const categories = computed<CategoryIndex[]>(() => {
    if (!tm('home.categories')) {
      console.warn('home.categories key not found')
      return []
    }

    const result = tm('home.categories',)

    // Ensure we're getting an array
    if (Array.isArray(result)) {
      return result as CategoryIndex[]
    }

    console.warn('home.categories is not an array:', result)
    return []
  })

  return {
    categories
  }
}