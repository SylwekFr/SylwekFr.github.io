import type { Certification } from '@/models/entities/certification'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useCertificationList() {
  const { tm } = useI18n()

  const certifications = computed<Certification[]>(() =>
    tm('aboutMe.certifications') as Certification[]
  )

  return {
    certifications
  }
}