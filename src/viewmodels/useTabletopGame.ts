import type { TabletopGame } from '@/models/entities/tabletopGame'
import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default function useTabletopGame() {
  const { tm } = useI18n()

  useHead({
  title: 'SylwekFr - Tabletop Games',
  meta: [
    {
      name: 'description',
      content: 'Some tabletop games I enjoy to play with friend and I recommend to have a fun time'
    }
  ]
})

  const tabletopGames = computed<TabletopGame[]>(() => {

      const result = tm('tabletopGames',)

      // Ensure we're getting an array
      if (Array.isArray(result)) {
        return result as TabletopGame[]
      }

      console.warn('tableTopGames is not an array:', result)
      return []
    })

  return {
    tabletopGames
  }
}