import type { Study } from '@/models/entities/study'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useStudiesTimeline() {
  const { tm } = useI18n()

  const studies = computed<Study[]>(() => {
    try {
      return tm('aboutMe.studies') as Study[]
    } catch (error) {
      console.error('Error loading studies:', error)
      return []
    }
  })

  const getSchoolInitials = (schoolName: string): string => {
    return schoolName
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return {
    studies,
    getSchoolInitials
  }
}