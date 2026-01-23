import type { Experience } from '@/models/entities/experience'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
export function useExperienceTimeline() {
  const { tm } = useI18n()


  const experiences = computed<Experience[]>(() => {
    try {
      return tm('aboutMe.professional-experiences') as Experience[]
    } catch (error) {
      console.error('Error loading professional experiences:', error)
      return []
    }
  })

  return {
    experiences
  }
}